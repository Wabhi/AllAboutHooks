import React from "react";
import Child3 from "./Child3";
export default function Child2(props) {
  console.log("2");
  return (
    <div>
      <Child3 />
    </div>
  );
}
