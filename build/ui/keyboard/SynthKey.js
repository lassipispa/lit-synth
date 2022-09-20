var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { synthKeyStyles } from "./SynthKey.styles";
import { oscillatorStore } from "../../stores/OscillatorStore.js";
const { addFrequency, removeFrequency } = oscillatorStore.getState();
let SynthKey = class SynthKey extends LitElement {
    constructor() {
        super(...arguments);
        this.freq = "440";
        this.key = "a";
        this._test = "Test";
        this.openGate = () => {
            this._test = "Auki";
            addFrequency(parseInt(this.freq, 10));
        };
        this.closeGate = () => {
            this._test = "Kiinni";
            removeFrequency(parseInt(this.freq, 10));
        };
        this.onKeyDown = (event) => {
            if (event.repeat)
                return;
            if (event.key === this.key)
                this.openGate();
        };
        this.onKeyUp = (event) => {
            if (event.key === this.key)
                this.closeGate();
        };
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener("keydown", this.onKeyDown, false);
        document.addEventListener("keyup", this.onKeyUp, false);
    }
    render() {
        return html `<button
      @mousedown="${this.openGate}"
      @mouseup="${this.closeGate}"
    >
      ${this._test}
    </button>`;
    }
};
SynthKey.styles = synthKeyStyles;
__decorate([
    property()
], SynthKey.prototype, "freq", void 0);
__decorate([
    property()
], SynthKey.prototype, "key", void 0);
__decorate([
    state()
], SynthKey.prototype, "_test", void 0);
SynthKey = __decorate([
    customElement("synth-key")
], SynthKey);
export { SynthKey };
//# sourceMappingURL=SynthKey.js.map