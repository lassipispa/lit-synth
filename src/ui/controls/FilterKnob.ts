import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./ControlKnob";
import { filterStore } from "../../stores/FilterStore";
import { filterKnobStyles } from "./FilterKnob.styles";

@customElement("filter-knob")
class FilterKnob extends LitElement {
    static override styles = filterKnobStyles;

    @property({ type: Number }) public min = 50;
    @property({ type: Number }) public max = 1000;

    @state() private _frequency = 0;

    constructor() {
        super();
        this._subscribeToFilterStore();
    }

    private _subscribeToFilterStore = () => {
        filterStore.subscribe((state) => (this._frequency = state.frequency));
    };

    public onChange = (event: InputEvent) => {
        if (!event.data) return;
        const factor = parseInt(event.data) / 100;
        const newValue = Math.round(factor * this.max);
        filterStore.getState().setFrequency(newValue);
    };

    override render() {
        return html`
            <div class="filter-knob">
                <control-knob
                    name="Filter"
                    @onchange=${this.onChange}
                ></control-knob>
                <p class="filter-knob-frequency">${this._frequency}</p>
            </div>
        `;
    }
}

export { FilterKnob };
