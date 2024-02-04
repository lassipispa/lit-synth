import { css } from "lit";

export const controlKnobStyles = css`
    p {
        margin: 8px;
    }

    .control-knob {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .knob {
        position: relative;
        background-color: grey;
        height: 48px;
        width: 48px;
        margin: auto;
        border: 2px solid gray;
        border-radius: 50%;
        cursor: pointer;
    }

    .value-indicator {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: rotate(0deg);
        background-color: darkgray;
        z-index: 10;
    }

    .value-indicator:before {
        content: "";
        position: absolute;
        bottom: 8px;
        left: 8px;
        width: 8px;
        height: 8px;
        background-color: #ffff;
        border-radius: 50%;
    }
`;
