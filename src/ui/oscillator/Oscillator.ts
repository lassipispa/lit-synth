import { frequencyStore } from "../../stores/FrequencyStore.js";

const { subscribe } = frequencyStore;

class Oscillator {
  private _context: AudioContext;
  private _amp: GainNode;
  private _oscillators: OscillatorNode[] = [];

  constructor(type: OscillatorType = "sine") {
    this._context = new window.AudioContext();
    this._amp = this._context.createGain();
    this._amp.connect(this._context.destination);
    this._amp.gain.value = 1;
    this._subscribeToOscillatorState(type);
  }

  private createOscillator(freq = 440, type: OscillatorType) {
    const oscillator = this._context.createOscillator();
    oscillator.frequency.setValueAtTime(freq, 0);
    oscillator.connect(this._amp);
    oscillator.type = type;
    oscillator.start(0);
    this._oscillators.push(oscillator);
  }

  private _subscribeToOscillatorState(type: OscillatorType) {
    subscribe((oscillatorState) => {
      this._oscillators.forEach((oscillator) => {
        if (!oscillatorState.isIncluded(oscillator)) oscillator.stop();
      });

      this._oscillators = this._oscillators.filter((oscillator) =>
        oscillatorState.isIncluded(oscillator),
      );

      const oscillatorFrequencies = this._oscillators.map(
        (osc) => osc.frequency.value,
      );

      oscillatorState.frequencies.forEach((freq) => {
        if (!oscillatorFrequencies.includes(freq))
          this.createOscillator(freq, type);
      });
    });
  }
}

export { Oscillator };
