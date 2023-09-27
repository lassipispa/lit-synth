import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { synthKeyStyles } from "./SynthKey.styles";
import { frequencyStore } from "../../stores/FrequencyStore";

const { addFrequency, removeFrequency } = frequencyStore.getState();

/**
 * @attr freq
 * @attr key
 */
@customElement("synth-key")
class SynthKey extends LitElement {
  @property() public freq = "440";

  @property() public key = "a";

  @state() private _open = false;

  static override styles = synthKeyStyles;

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("keyup", this.onKeyUp, false);
  }

  isMatchingKey(event: KeyboardEvent) {
    return event.key === this.key || event.key === this.key.toUpperCase();
  }

  openGate = () => {
    this._open = true;
    addFrequency(parseInt(this.freq, 10));
  };

  closeGate = () => {
    this._open = false;
    removeFrequency(parseInt(this.freq, 10));
  };

  onKeyDown = (event: KeyboardEvent) => {
    if (event.repeat) return;
    if (this.isMatchingKey(event)) this.openGate();
  };

  onKeyUp = (event: KeyboardEvent) => {
    if (this.isMatchingKey(event)) this.closeGate();
  };

  override render() {
    return html` <button
      class=${this._open ? "open" : "closed"}
      @mousedown="${this.openGate}"
      @mouseup="${this.closeGate}"
      @mouseout="${this.closeGate}"
    ></button>`;
  }
}

export { SynthKey };
