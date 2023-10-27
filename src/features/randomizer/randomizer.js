import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawRandNumb: 0,
  songRandNumb: 0,
  charRandNumb: 0,
};

export const randomizerSlice = createSlice({
  name: "randomizer",
  initialState,
  reducers: {
    generateNumb: (state, { payload }) => {
      console.log(payload);
      if (!payload) {
        const newState = Object.keys(state).reduce((acc, key) => {
          acc[key] = Math.floor(Math.random() * 6);
          console.log(Object.keys(state));
          return acc;
        }, {});

        return { ...state, ...newState };
      }

      state[payload] = Math.floor(Math.random() * 6);
    },
  },
});

export const {
  generateNumb,
} = randomizerSlice.actions;

export default randomizerSlice.reducer;
