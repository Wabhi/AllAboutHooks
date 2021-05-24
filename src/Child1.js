import React from "react";
import Child2 from "./Child2";
export default function Child1(props) {
  console.log("1");
  return (
    <div>
      <Child2 />
    </div>
  );
}
