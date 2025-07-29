import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    myname: "esther",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    drecement: (state) => {
      state.value -= 1;
    },
    incrementByuser: (state, actions) => {
      state.value = state.value + actions.payload;
    },
  },
});

export const { increment, drecement, incrementByuser } = counterSlice.actions;
export default counterSlice.reducer;
