import create from "zustand/vanilla";

interface FilterState {
    frequency: number;
    gain: number;
    cutoff: number;
    setFrequency: (frequency: number) => void;
    setCutoff: (cutoff: number) => void;
}

const filterStore = create<FilterState>((set, _get) => ({
    frequency: 0,
    gain: 26,
    cutoff: 500,
    setFrequency: (frequency: number) => set({ frequency }),
    setCutoff: (cutoff: number) => set({ cutoff }),
}));

export { filterStore, FilterState };
