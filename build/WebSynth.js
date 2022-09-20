var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { oscillatorStore } from "./stores/OscillatorStore.js";
import "./ui/keyboard/SynthKeyboard.js";
const { getState, subscribe } = oscillatorStore;
let WebSynth = class WebSynth extends LitElement {
    constructor() {
        super(...arguments);
        this._h1 = "<lit-synth/>";
        this._freqs = getState().frequencies;
    }
    connectedCallback() {
        super.connectedCallback();
        subscribe((oscillatorState) => {
            this._freqs = oscillatorState.frequencies;
        });
    }
    render() {
        return html `
      <h1>${this._h1}</h1>
      <p>${JSON.stringify(this._freqs, null, 2)}</p>
      <synth-keyboard></synth-keyboard>
    `;
    }
};
__decorate([
    state()
], WebSynth.prototype, "_h1", void 0);
__decorate([
    state()
], WebSynth.prototype, "_freqs", void 0);
WebSynth = __decorate([
    customElement("web-synth")
], WebSynth);
export { WebSynth };
//# sourceMappingURL=WebSynth.js.map