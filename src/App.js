import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Redux/Slices/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment update
      </button>
    </div>
  );
}

export default App;
