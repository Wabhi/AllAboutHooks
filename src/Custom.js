import React from "react";
import useCustum from "./useCustum";
export default function Custom() {
  const [count, increment, decrement, reset] = useCustum(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}
