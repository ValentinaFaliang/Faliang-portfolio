import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  massage: null,
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    createFeedback: (state, { payload }) => {},
  },
});

export const { createFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
