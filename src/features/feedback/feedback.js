import { createSlice } from "@reduxjs/toolkit";
import { loadFeedback, saveFeedback } from "./localstorage";

const initialState = loadFeedback();

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    createFeedback: (state, {payload}) => {
      saveFeedback([
        ...state,
        payload
      ]);
      return [
        ...state,
        payload
      ];
    },
  },
});

export const { createFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
