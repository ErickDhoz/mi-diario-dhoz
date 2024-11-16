import { createSlice } from "@reduxjs/toolkit";
export const boolSlice = createSlice({
  name: "bool",
  initialState: {
    bool: true,
  },
  reducers: {
    trueOrFalse: (state /* action */) => {
      state.bool = !state.bool;
    },
  },
});
export const { trueOrFalse } = boolSlice.actions;
