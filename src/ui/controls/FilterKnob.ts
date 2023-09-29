import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./ControlKnob";
import { filterStore } from "../../stores/FilterStore";

@customElement("filter-knob")
class FilterKnob extends LitElement {
  @state() private _frequency = 0;

  constructor() {
    super();
    this._subscribeToFilterStore();
  }

  private _subscribeToFilterStore() {
    filterStore.subscribe((state) => (this._frequency = state.frequency));
  }

  onChange = (event: InputEvent) => {
    if (!event.data) return;
    filterStore.getState().setFrequency(parseInt(event.data));
  };

  override render() {
    return html`
      <div>
        <div>Freq: ${this._frequency}</div>
        <control-knob @onchange=${this.onChange}></control-knob>
      </div>
    `;
  }
}

export { FilterKnob };
