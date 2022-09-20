import create from 'zustand/vanilla';

interface OscillatorState {
  on: boolean;
  frequencies: number[];
  addFrequency: (freq: number) => void;
  removeFrequency: (freq: number) => void;
}

const oscillatorStore = create<OscillatorState>((set) => ({
  on: false,
  frequencies: [],
  addFrequency: (freq: number) =>
    set((state) => ({ frequencies: [...state.frequencies, freq] })),
  removeFrequency: (freq: number) =>
    set((state) => ({
      frequencies: state.frequencies.filter((f) => f !== freq),
    })),
}));

export { oscillatorStore, OscillatorState };
