import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./SynthKey.js";
import { synthKeyboardStyles } from "./SynthKeyboard.styles";

@customElement("synth-keyboard")
class SynthKeyboard extends LitElement {
  static override styles = synthKeyboardStyles;

  override render() {
    return html`
      <div class="synth-keys-container">
        <synth-key freq="440" key="a"></synth-key>
        <synth-key freq="880" key="s" waveForm="triangle"></synth-key>
      </div>
    `;
  }
}

export { SynthKeyboard };
