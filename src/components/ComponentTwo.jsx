import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Two.module.css";
import { Context } from "../App";

export default function ComponentTwo() {
  const navigate = useNavigate();

  // create a simple state
  const [signedIn, setSignedIn] = React.useContext(Context);

  return (
    <div className={styles.test}>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          console.log(signedIn);
        }}
      >
        show state
      </button>
      <button
        onClick={() => {
          setSignedIn(true);
          navigate("/users");
        }}
      >
        authentication
      </button>
    </div>
  );
}
