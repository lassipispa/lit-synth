import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { synthKeyStyles } from "./SynthKey.styles";
import { oscillatorStore } from "../../stores/OscillatorStore.js";

const { addFrequency, removeFrequency } = oscillatorStore.getState();

/**
 * @attr freq
 * @attr key
 */
@customElement("synth-key")
class SynthKey extends LitElement {
  @property() public freq = "440";

  @property() public key = "a";

  @state() private _test = "Test";

  static override styles = synthKeyStyles;

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("keyup", this.onKeyUp, false);
  }

  openGate = () => {
    this._test = "Auki";
    addFrequency(parseInt(this.freq, 10));
  };

  closeGate = () => {
    this._test = "Kiinni";
    removeFrequency(parseInt(this.freq, 10));
  };

  onKeyDown = (event: KeyboardEvent) => {
    if (event.repeat) return;
    if (event.key === this.key) this.openGate();
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (event.key === this.key) this.closeGate();
  };

  override render() {
    return html` <button
      @mousedown="${this.openGate}"
      @mouseup="${this.closeGate}"
      @mouseout="${this.closeGate}"
    >
      ${this._test}
    </button>`;
  }
}

customElements.define("synth-key", SynthKey);

export { SynthKey };
