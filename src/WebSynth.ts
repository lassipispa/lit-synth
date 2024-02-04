import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Synthesizer } from "./Synthesizer";
import { webSynthStyles } from "./WebSynth.styles";
import "./ui/keyboard/SynthKeyboard";
import "./ui/controls/FilterKnob";
import "./oscillator/PolyOscillator";

@customElement("web-synth")
class WebSynth extends LitElement {
    static override styles = webSynthStyles;

    @state() private _h1 = "<lit-synth/>";

    override connectedCallback(): void {
        super.connectedCallback();
        new Synthesizer();
    }

    override render() {
        return html`
            <div class="web-synth">
                <h1>${this._h1}</h1>
                <div class="web-synth-content-container">
                    <div class="keyboard-container">
                        <synth-keyboard></synth-keyboard>
                    </div>
                    <div class="knob-container">
                        <filter-knob></filter-knob>
                    </div>
                </div>
            </div>
        `;
    }
}

export { WebSynth };
