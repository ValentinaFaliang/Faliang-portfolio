import { createSlice } from "@reduxjs/toolkit";

const initialState =  false;

export const modalStatusSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      return payload;
    },
  },
});

export const { showModal } = modalStatusSlice.actions;

export default modalStatusSlice.reducer;
