import { frequencyStore } from "../../stores/FrequencyStore.js";

const { subscribe } = frequencyStore;

class Oscillator {
  private _context: AudioContext;
  private _amp: GainNode;
  private _nodes: OscillatorNode[] = [];
  private _type: OscillatorType = "sine";

  constructor(type: OscillatorType = "sine", gain = 1) {
    this._type = type;
    this._context = new window.AudioContext();
    this._amp = this._context.createGain();
    this._amp.connect(this._context.destination);
    this._amp.gain.value = gain;
    this._subscribeToFrequencyStore();
  }

  public setVolume(value: number) {
    this._amp.gain.value = value;
  }

  public setWaveform(type: OscillatorType) {
    this._type = type;
  }

  private _createNode(freq = 440, type: OscillatorType) {
    const oscillator = this._context.createOscillator();
    oscillator.frequency.setValueAtTime(freq, 0);
    oscillator.connect(this._amp);
    oscillator.type = type;
    oscillator.start(0);
    this._nodes.push(oscillator);
  }

  private _subscribeToFrequencyStore() {
    subscribe((frequencyState) => {
      this._nodes.forEach((oscillator) => {
        if (!frequencyState.isIncluded(oscillator)) oscillator.stop();
      });

      this._nodes = this._nodes.filter((oscillator) =>
        frequencyState.isIncluded(oscillator),
      );

      const nodeFrequencies = this._nodes.map((node) => node.frequency.value);

      frequencyState.frequencies.forEach((freq) => {
        if (!nodeFrequencies.includes(freq)) this._createNode(freq, this._type);
      });
    });
  }
}

export { Oscillator };
