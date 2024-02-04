import { css } from "lit";

export const synthKeyboardStyles = css`
    .synth-keyboard {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .synth-keys {
        display: flex;
        gap: 2px;
        justify-content: center;
    }

    .virtual-keys {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .virtual-keys-row {
        display: flex;
        gap: 2px;
    }
`;
