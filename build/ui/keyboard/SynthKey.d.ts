import { LitElement } from "lit";
declare class SynthKey extends LitElement {
    freq: string;
    key: string;
    private _test;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    openGate: () => void;
    closeGate: () => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onKeyUp: (event: KeyboardEvent) => void;
    render(): import("lit-html").TemplateResult<1>;
}
export { SynthKey };
//# sourceMappingURL=SynthKey.d.ts.map