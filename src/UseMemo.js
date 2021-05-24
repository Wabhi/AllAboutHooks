//While React.memo() is a HOC, useMemo() is a React Hook. With useMemo(),
//we can return memoized values and avoid re-rendering if the dependencies to a function have not changed.
import React, { useState } from "react";
export default function UseMemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const isEven1 = () => {
    let i = 0;
    while (i < 10000) {
      i++;
    }
    return counter1 % 2 === 0;
  };
  const isEven2 = () => {
    return counter2 % 2 === 0;
  };
  return (
    <div>
      <h1>Counter-1 || {counter1}</h1>
      <p>{isEven1() ? "Even" : "Odd"}</p>
      <button onClick={() => setCounter1(counter1 + 1)}>INCREMENT-1</button>
      <hr />
      <h1>Counter-2 || {counter2}</h1>
      <p>{isEven2() ? "Even" : "Odd"}</p>
      <button onClick={() => setCounter2(counter2 + 1)}>INCREMENT-2</button>
    </div>
  );
}
// import React,{useState,useMemo} from "react";
// import "./style.css";

// export default function App() {
//   const [count1,setCount1] = useState(0)
//   const [count2,setCount2] = useState(0)
//   const isEven1 = useMemo(()=>{
//     let i=0
//     while(i<2000000000)i++
//     return count1%2===0
//   },[count1])
//   const isEven2 = ()=>{
//     return count2%2===0
//   }
//   return (
//     <div>
//       <p>{count1}</p>
//       <p>{isEven1?'Even':'Odd'}</p>
//       <button onClick={()=>setCount1(count1+1)}>INCREMENT</button>
//       <hr/>
//       <p>{count2}</p>
//       <p>{isEven2()?'Even':'Odd'}</p>
//       <button onClick={()=>setCount2(count2+1)}>INCREMENT</button>
//     </div>
//   );
// }
//The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs.
//For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3,
//but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.
//The major diffrence between React.Memo and useMemo hook==>
//React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change
//useMemo() is a React Hook that we can use to wrap functions within a component.
//We can use this to ensure that the values within that function are re-computed only when one of its dependencies change
