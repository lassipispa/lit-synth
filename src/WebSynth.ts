import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./ui/keyboard/SynthKeyboard.js";
import "./ui/oscillator/Oscillator.js";
import { Oscillator } from "./ui/oscillator/Oscillator.js";

@customElement("web-synth")
class WebSynth extends LitElement {
  @state() private _h1 = "<lit-synth/>";

  override connectedCallback(): void {
    super.connectedCallback();
    new Oscillator("sine", 1);
    new Oscillator("sawtooth", 0.1);
    new Oscillator("square", 0.5);
  }

  override render() {
    return html`
      <h1>${this._h1}</h1>
      <synth-keyboard></synth-keyboard>
    `;
  }
}

export { WebSynth };
