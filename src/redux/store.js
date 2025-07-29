import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./Counter";

export const store = configureStore({
  reducer: {
    counterslice,
  },
});
