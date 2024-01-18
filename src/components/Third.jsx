import React from "react";
import { useSelector } from "react-redux";

export default function Third() {
  const val = useSelector((state) => state.counter.val);
  return (
    <div>
      <button
        onClick={() => {
          console.log(val);
        }}
      >
        show input value
      </button>
    </div>
  );
}
