import React from "react";
import { Context } from "../App";
import { Navigate } from "react-router-dom";

export default function ComponentOne() {
  const [signedIn, setSignedIn] = React.useContext(Context);
  if (!signedIn) {
    return <Navigate to="/login" />;
  }

  return <div>users list</div>;
}
