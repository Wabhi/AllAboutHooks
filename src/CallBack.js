//the major use of useCallback is  to prevent the function we create even
//though it should not re-render..
//The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
//performace optimization ,we use React.memo,useMemo,useCallBack
import React, { useCallback, useState } from "react";
const functionCount = new Set();
export default function CallBack() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleIncrement1 = useCallback(() => {
    console.log("increment - 1 is calling");
    setCount1(count1 + 1);
  }, [count1]);
  const handleIncrement2 = () => {
    console.log("increment - 2 is calling");
    setCount2(count2 + 1);
  };
  functionCount.add(handleIncrement1);
  functionCount.add(handleIncrement2);
  console.log(functionCount);
  return (
    <div>
      <h1>
        {count1} ||| {count2}
      </h1>
      <button onClick={handleIncrement1}>INCREMENT-1</button>
      <button onClick={handleIncrement2}>INCREMENT-2</button>
    </div>
  );
}
