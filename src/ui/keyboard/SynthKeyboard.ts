import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./SynthKey.js";
import { synthKeyboardStyles } from "./SynthKeyboard.styles";
import "./KeyboardKey";

@customElement("synth-keyboard")
class SynthKeyboard extends LitElement {
    static override styles = synthKeyboardStyles;

    override render() {
        return html`
            <div class="synth-keyboard">
                <div class="synth-keys">
                    <synth-key freq="523" key="a"></synth-key>
                    <synth-key freq="587" key="s"></synth-key>
                    <synth-key freq="659" key="d"></synth-key>
                    <synth-key freq="698" key="f"></synth-key>
                </div>
                <div class="virtual-keys">
                    <div class="virtual-keys-row">
                        <keyboard-key key="a"></keyboard-key>
                        <keyboard-key key="s"></keyboard-key>
                        <keyboard-key key="d"></keyboard-key>
                        <keyboard-key key="f"></keyboard-key>
                    </div>
                </div>
            </div>
        `;
    }
}

export { SynthKeyboard };
