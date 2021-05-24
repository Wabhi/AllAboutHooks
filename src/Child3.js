import React, { useContext } from "react";
import { Context } from "./App";
export default function Child3(props) {
  console.log("3");
  const name = useContext(Context);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
