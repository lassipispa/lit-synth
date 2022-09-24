import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { controlKnobStyles } from "./ControlKnob.styles";

@customElement("control-knob")
class ControlKnob extends LitElement {
  static override styles = controlKnobStyles;

  @state() private _angle = 0;
  @state() private _value = 0;

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseDown = () => document.addEventListener("mousemove", this.onMouseMove);
  onMouseUp = () => document.removeEventListener("mousemove", this.onMouseMove);

  onMouseMove = (event: MouseEvent) => {
    const { left, top, width, height } = this.getBoundingClientRect();

    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const knobCenterX = width / 2 + left;
    const knobCenterY = height / 2 + top;

    const deltaX = knobCenterX - mouseX;
    const deltaY = knobCenterY - mouseY;

    const angleInDegrees = (Math.atan2(deltaX, deltaY) * 180) / Math.PI;
    const knobAbgle = -(angleInDegrees - 135);

    if (knobAbgle >= 0 && knobAbgle <= 270) {
      this._angle = knobAbgle;
    } else if (knobAbgle < 0) {
      this._angle = 0;
    } else {
      this._angle = 270;
    }

    this._value = Math.floor((100 * this._angle) / 270);
    this.dispatchEvent(
      new InputEvent("onchange", {
        data: this._value.toString(),
        bubbles: true,
      }),
    );
  };

  override render() {
    return html`
      <div class="knob" @mousedown="${this.onMouseDown}">
        <div
          class="value-indicator"
          style="transform: rotate(${this._angle}deg)"
        ></div>
      </div>
    `;
  }
}

export { ControlKnob };
