import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { keyboardKeyStyles } from "./KeyboardKey.styles";

@customElement("keyboard-key")
class KeyboardKey extends LitElement {
    static override styles = keyboardKeyStyles;

    @property() public key = "a";

    @state() private _active = false;

    override connectedCallback() {
        super.connectedCallback();
        document.addEventListener("keydown", this.onKeyDown, false);
        document.addEventListener("keyup", this.onKeyUp, false);
    }

    isMatchingKey(event: KeyboardEvent) {
        return event.key === this.key || event.key === this.key.toUpperCase();
    }

    onKeyDown = (event: KeyboardEvent) => {
        if (event.repeat) return;
        if (this.isMatchingKey(event)) this._active = true;
    };

    onKeyUp = (event: KeyboardEvent) => {
        if (this.isMatchingKey(event)) this._active = false;
    };

    override render() {
        return html`
            <div
                class=${classMap({
                    "keyboard-key": true,
                    active: this._active,
                })}
            >
                ${this.key}
            </div>
        `;
    }
}

export { KeyboardKey };
