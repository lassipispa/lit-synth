import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { controlKnobStyles } from "./ControlKnob.styles";

@customElement("control-knob")
class ControlKnob extends LitElement {
    static override styles = controlKnobStyles;

    @property() public name = "";

    @state() private _angle = 0;
    @state() private _value = 0;

    override connectedCallback() {
        super.connectedCallback();
        document.addEventListener("mouseup", this.onMouseUp);
    }

    onMouseDown = () =>
        document.addEventListener("mousemove", this.onMouseMove);
    onMouseUp = () =>
        document.removeEventListener("mousemove", this.onMouseMove);

    onMouseMove = (event: MouseEvent) => {
        const newValue = this._value - event.movementY;

        if (newValue > 100 || newValue < 0) return;

        this._value = newValue;
        this._angle = (newValue * 270) / 100;

        this.dispatchEvent(
            new InputEvent("onchange", {
                data: this._value.toString(),
                bubbles: true,
            }),
        );
    };

    override render() {
        return html`
            <div class="control-knob">
                <p class="control-knob-name">${this.name}</p>
                <div class="knob" @mousedown="${this.onMouseDown}">
                    <div
                        class="value-indicator"
                        style="transform: rotate(${this._angle}deg)"
                    ></div>
                </div>
            </div>
        `;
    }
}

export { ControlKnob };
