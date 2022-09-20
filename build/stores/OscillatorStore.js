import create from 'zustand/vanilla';
const oscillatorStore = create((set) => ({
    on: false,
    frequencies: [],
    addFrequency: (freq) => set((state) => ({ frequencies: [...state.frequencies, freq] })),
    removeFrequency: (freq) => set((state) => ({
        frequencies: state.frequencies.filter((f) => f !== freq),
    })),
}));
export { oscillatorStore };
//# sourceMappingURL=OscillatorStore.js.map