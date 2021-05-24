//by useing custome hook we can share logic between component
//no need to write logic inside component just use in component by useing
//custom hooks.

import React, { useState } from "react";
export default function useCustum(initialValue) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialValue);
  };
  return [count, increment, decrement, reset];
}
