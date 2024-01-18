import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  assign,
  increment,
  incrementByAmount,
} from "./Redux/Slices/counterSlice";
import Third from "./components/Third";

function App() {
  const dispatch = useDispatch();
  const ref = useRef();
  return (
    <div>
      <input
        ref={ref}
        placeholder="insert value"
        onChange={(e) => dispatch(assign(e.target.value))}
      />

      <Third />
    </div>
  );
}

export default App;
