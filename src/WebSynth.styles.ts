import { css } from "lit";

export const webSynthStyles = css`
    h1 {
        text-align: center;
        font-size: 4em;
    }

    .web-synth {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 1280px;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px -3px;
    }

    .web-synth-content-container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
    }

    .keyboard-container {
        display: flex;
        padding: 24px;
        border-top: 2px solid;
        border-bottom: 2px solid;
    }

    .knob-container {
        display: flex;
    }
`;
