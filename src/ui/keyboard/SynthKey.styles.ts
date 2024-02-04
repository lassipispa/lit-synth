import { css } from "lit";

export const synthKeyStyles = css`
    button {
        display: flex;
        height: 128px;
        width: 40px;
        background-color: white;
        border: 2px black solid;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }

    .synth-key.active button {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 8px 2px inset;
    }
`;
