import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "./slices";

export const store = configureStore({
  reducer: {
    loader: loaderSlice.reducer,
  },
});
