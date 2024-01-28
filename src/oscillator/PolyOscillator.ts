import { FrequencyState, frequencyStore } from "../stores/FrequencyStore.js";
import { FilterState, filterStore } from "../stores/FilterStore.js";

class PolyOscillator extends OscillatorNode {
    private _gain: GainNode;
    private _filter: BiquadFilterNode;
    private _oscillatorNodes: OscillatorNode[] = [];

    constructor(context: BaseAudioContext, options?: OscillatorOptions) {
        super(context, options);
        this._gain = this.context.createGain();
        this._gain.connect(this.context.destination);
        this._gain.gain.value = 0;

        this._filter = context.createBiquadFilter();
        this._filter.type = "lowshelf";
        this._filter.connect(this.context.destination);

        this._subscribeToFrequencyStore();
        this._subscribeToFilterStore();
    }

    private _createNode(freq = 440) {
        const oscillator = new OscillatorNode(this.context);
        oscillator.frequency.setValueAtTime(freq, 0);
        oscillator.connect(this._gain);
        oscillator.connect(this._filter);
        oscillator.type = this.type;
        oscillator.start(0);

        this._oscillatorNodes.push(oscillator);
    }

    private _subscribeToFrequencyStore = () => {
        frequencyStore.subscribe((frequencyState) => {
            this._removeExpiredOscillatorNodes(frequencyState);
            this._addNewOscillatorNodes(frequencyState);
        });
    };

    private _subscribeToFilterStore = () => {
        filterStore.subscribe(this._updateFilter);
    };

    private _updateFilter = (filterState: FilterState) => {
        const { frequency, gain } = filterState;
        this._filter.frequency.setValueAtTime(
            frequency,
            this.context.currentTime,
        );
        this._filter.gain.setValueAtTime(gain, this.context.currentTime);
    };

    private _removeExpiredOscillatorNodes = (
        frequencyState: FrequencyState,
    ) => {
        this._oscillatorNodes.forEach((oscillator) => {
            if (!frequencyState.containsOscillatorFrequency(oscillator))
                oscillator.stop();
        });

        this._oscillatorNodes = this._oscillatorNodes.filter((oscillator) =>
            frequencyState.containsOscillatorFrequency(oscillator),
        );
    };

    private _addNewOscillatorNodes = (frequencyState: FrequencyState) => {
        const nodeFrequencies = this._oscillatorNodes.map(
            (node) => node.frequency.value,
        );

        frequencyState.frequencies.forEach((freq) => {
            if (!nodeFrequencies.includes(freq)) this._createNode(freq);
        });
    };
}

export { PolyOscillator };
