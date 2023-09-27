import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./SynthKey.js";
import { synthKeyboardStyles } from "./SynthKeyboard.styles";

@customElement("synth-keyboard")
class SynthKeyboard extends LitElement {
  static override styles = synthKeyboardStyles;

  override render() {
    return html`
      <div class="synth-keyboard">
        <synth-key freq="523" key="a"></synth-key>
        <synth-key freq="587" key="s"></synth-key>
        <synth-key freq="659" key="d"></synth-key>
        <synth-key freq="698" key="f"></synth-key>
      </div>
    `;
  }
}

export { SynthKeyboard };
