import { css } from "lit";

export const synthKeyStyles = css`
    .synth-key {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 4px;
    }

    button {
        display: flex;
        height: 128px;
        width: 100%;
        background-color: white;
        border: 2px black solid;
        border-radius: 2px;
    }

    .keyboard-key-indicator {
        display: flex;
        height: 40px;
        width: 38px;
        background-color: white;
        border: 2px black solid;
        border-radius: 8px;
        padding: 2px;
    }

    .synth-key.active button,
    .synth-key.active .keyboard-key-indicator {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 8px 2px inset;
    }
`;
