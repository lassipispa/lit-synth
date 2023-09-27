import { PolyOscillator } from "./oscillator/PolyOscillator";

class Synthesizer {
  constructor() {
    const context = new window.AudioContext();

    new PolyOscillator(context, { type: "sine" });
    new PolyOscillator(context, { type: "sawtooth" });
  }
}

export { Synthesizer };
