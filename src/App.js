// import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { authActions, counterActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.counter);
  const show = useSelector((store) => store.counter.showCounter);
  const auth = useSelector((store) => store.auth.isAuthenticated);
  const incrementBy5 = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementBy5 = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  const handleAuth = () => {
    dispatch(authActions.login());
  };
  const handleAuthlogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      {/* <Counter /> */}
      {!auth && <p>Not Authenticated</p>}
      {auth && <p>Is Authenticated</p>}
      <button onClick={handleAuth}>Authenticate</button>
      <button onClick={handleAuthlogout}>Logout</button>
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
