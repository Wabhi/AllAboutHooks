import { createContext } from "react";
import CallBack from "./CallBack";
import Child1 from "./Child1";
import Custom from "./Custom";
import "./styles.css";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseState from "./UseState";

export const Context = createContext();
export default function App({ name }) {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h4>React hooks only made for functional component</h4>
      <h4>Don’t call Hooks inside loops, conditions, or nested functions</h4>
      <h4>Don’t call Hooks from regular JavaScript functions</h4>
      <h4>You can call Hooks from custom Hooks</h4>
      <ol>
        <li>useState</li>
        <li>useEffect</li>
        <li>useRef</li>
        <li>useCallBack</li>
        <li>useMemo</li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>customHook</li>
      </ol>
      <Context.Provider value={name}>
        <Child1 />
      </Context.Provider>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <CallBack /> */}
      {/* <UseReducer /> */}
      {/* <Custom /> */}
    </div>
  );
}

App.defaultProps = {
  name: "abhishek tiwari"
};
