import { css } from "lit";

export const keyboardKeyStyles = css`
    .keyboard-key {
        display: flex;
        height: 40px;
        width: 38px;
        background-color: white;
        border: 2px black solid;
        border-radius: 8px;
        padding: 2px;
    }

    .keyboard-key.active {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 8px 2px inset;
    }
`;
