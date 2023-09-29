import { frequencyStore } from "../stores/FrequencyStore.js";

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
  }

  private _createNode(freq = 440) {
    const oscillator = new OscillatorNode(this.context);
    oscillator.frequency.setValueAtTime(freq, 0);
    oscillator.connect(this._gain);
    oscillator.connect(this._filter);
    oscillator.type = this.type;
    oscillator.start(0);

    this._filter.frequency.setValueAtTime(1000, this.context.currentTime);
    this._filter.gain.setValueAtTime(26, this.context.currentTime);

    this._oscillatorNodes.push(oscillator);
  }

  private _subscribeToFrequencyStore() {
    frequencyStore.subscribe((frequencyState) => {
      this._oscillatorNodes.forEach((oscillator) => {
        if (!frequencyState.containsOscillatorFrequency(oscillator))
          oscillator.stop();
      });

      this._oscillatorNodes = this._oscillatorNodes.filter((oscillator) =>
        frequencyState.containsOscillatorFrequency(oscillator),
      );

      const nodeFrequencies = this._oscillatorNodes.map(
        (node) => node.frequency.value,
      );

      frequencyState.frequencies.forEach((freq) => {
        if (!nodeFrequencies.includes(freq)) this._createNode(freq);
      });
    });
  }
}

export { PolyOscillator };
