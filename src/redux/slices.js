import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    value: false,
  },
  reducers: {
    enableLoader(state) {
      state.value = true;
    },
    disableLoader(state) {
      state.value = false;
    },
  },
});

export const { enableLoader, disableLoader } = loaderSlice.actions;
