import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { oscillatorStore } from "./stores/OscillatorStore.js";
import "./ui/keyboard/SynthKeyboard.js";
import "./ui/controls/ControlKnob.js";

const { getState, subscribe } = oscillatorStore;

@customElement("web-synth")
class WebSynth extends LitElement {
  @state() private _h1 = "<lit-synth/>";
  @state() private _freqs = getState().frequencies;

  override connectedCallback() {
    super.connectedCallback();
    subscribe((oscillatorState) => {
      this._freqs = oscillatorState.frequencies;
    });
  }

  override render() {
    return html`
      <h1>${this._h1}</h1>
      <p>${JSON.stringify(this._freqs, null, 2)}</p>
      <synth-keyboard></synth-keyboard>
      <control-knob
        @onchange="${(event: InputEvent) => console.log(event.data)}"
      ></control-knob>
    `;
  }
}

export { WebSynth };
