import create from "zustand/vanilla";

interface FrequencyState {
  on: boolean;
  frequencies: number[];
  addFrequency: (freq: number) => void;
  removeFrequency: (freq: number) => void;
  isIncluded: (oscillator: OscillatorNode) => boolean;
}

const frequencyStore = create<FrequencyState>((set, get) => ({
  on: false,
  frequencies: [],
  addFrequency: (freq: number) =>
    set((state) => ({ frequencies: [...state.frequencies, freq] })),
  removeFrequency: (freq: number) =>
    set((state) => ({
      frequencies: state.frequencies.filter((f) => f !== freq),
    })),
  isIncluded: (oscillator: OscillatorNode) => {
    return get().frequencies.includes(oscillator.frequency.value);
  },
}));

export { frequencyStore, FrequencyState };
