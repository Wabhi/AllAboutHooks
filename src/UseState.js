//usestate is basically used for set the state of component
//in functional component,in class component we have this.state to
//to set the state but we can't you it in functional component
//so we can use useState hook to set the state.

import React, { useState } from "react";
export default function UseState() {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCount1 = () => {
    setCount1((currentCount1) => currentCount1 + 5);
  };
  const handleCount2 = () => {
    setCount2((currentCount2) => currentCount2 + 1);
  };
  return (
    <div>
      <h1>Count1 - {count1}</h1>
      <h1>Count2 - {count2}</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCount1}>INCRMENT-1</button>
      <button onClick={handleCount2}>INCRMENT-2</button>
    </div>
  );
}
