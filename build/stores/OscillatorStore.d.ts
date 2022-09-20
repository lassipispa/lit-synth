interface OscillatorState {
    on: boolean;
    frequencies: number[];
    addFrequency: (freq: number) => void;
    removeFrequency: (freq: number) => void;
}
declare const oscillatorStore: import("zustand/vanilla").StoreApi<OscillatorState>;
export { oscillatorStore, OscillatorState };
//# sourceMappingURL=OscillatorStore.d.ts.map