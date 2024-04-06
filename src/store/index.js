import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.value;
    },
    toggleCounter(state) {
      state.counter = !state.counter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
