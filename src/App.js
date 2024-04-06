// import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  const show = useSelector((store) => store.showCounter);
  const incrementBy5 = () => {
    dispatch({ type: "incrementBy5" });
  };
  const decrementBy5 = () => {
    dispatch({ type: "decrementBy5" });
  };
  const toggleCounter = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <>
      {/* <Counter /> */}
      {show && (
        <div>
          <p>{counter}</p>
          <button onClick={incrementBy5}>Increment by 5</button>
          <button onClick={decrementBy5}>Decrement by 5</button>
        </div>
      )}
      <button onClick={toggleCounter}>ToggleCounter</button>
    </>
  );
}

export default App;
