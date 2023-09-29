import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Synthesizer } from "./Synthesizer";
import "./ui/keyboard/SynthKeyboard";
import "./ui/controls/FilterKnob";
import "./oscillator/PolyOscillator";

@customElement("web-synth")
class WebSynth extends LitElement {
  @state() private _h1 = "<lit-synth/>";

  override connectedCallback(): void {
    super.connectedCallback();
    new Synthesizer();
  }

  override render() {
    return html`
      <h1>${this._h1}</h1>
      <synth-keyboard></synth-keyboard>
      <filter-knob></filter-knob>
    `;
  }
}

export { WebSynth };
