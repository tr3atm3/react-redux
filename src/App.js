// import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  const incrementBy5 = () => {
    dispatch({ type: "incrementBy5" });
  };
  const decrementBy5 = () => {
    dispatch({ type: "decrementBy5" });
  };
  return (
    <>
      {/* <Counter /> */}
      <p>{counter}</p>
      <button onClick={incrementBy5}>Increment by 5</button>
      <button onClick={decrementBy5}>Decrement by 5</button>
    </>
  );
}

export default App;
