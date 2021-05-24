//UseReducer is useally  perfable to useState  when you have complex state logic
//and when next state depends on the previous one.

//By use of useState..............................
// import React, { useState } from "react";
// export default function UseReducer() {
//   const [number, setNumber] = useState(1);
//   return (
//     <div>
//       <h1>{"🌻".repeat(number)}</h1>
//       <button onClick={() => setNumber(number + 1)}>ADD</button>
//       <button onClick={() => setNumber(number - 1)}>REMOVE</button>
//       <button onClick={() => setNumber(1)}>RESET</button>
//     </div>
//   );
// }

//By use of useReducer...............................
import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FLOWERS":
      return {
        number: state.number + 1
      };
    case "REMOVE_FLOWERS":
      return {
        number: state.number - 1
      };
    case "RESET_FLOWERS":
      return {
        number: 1
      };
    default:
      return {
        state
      };
  }
};
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { number: 1 });
  return (
    <div>
      <h1>{"🌻".repeat(state.number)}</h1>
      <button onClick={() => dispatch({ type: "ADD_FLOWERS" })}>ADD</button>
      <button onClick={() => dispatch({ type: "REMOVE_FLOWERS" })}>
        REMOVE
      </button>
      <button onClick={() => dispatch({ type: "RESET_FLOWERS" })}>RESET</button>
    </div>
  );
}
