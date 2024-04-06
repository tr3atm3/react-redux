import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      couonter: state.counter - 1,
    };
  }
  if (action.type === "decrement2") {
    return {
      couonter: state.counter - 2,
    };
  }
  if (action.type === "increment2") {
    return {
      counter: state.counter + 2,
    };
  }
};

const store = createStore(counterReducer);

export default store;
