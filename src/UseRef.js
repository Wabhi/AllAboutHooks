//UseRef is very helpfull to create direct reference to dom,it won't cause of rendering
//it returns mutable object with property current..
//The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
import React, { useRef } from "react";
export default function UseRef() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value = "My name is khan ! I am not terorrist";
    inputRef.current.focus();
  };
  return (
    <div>
      <button onClick={handleClick}>CLICK ME</button>
      <h4>Click the button to show use of useRef</h4>
      <textarea ref={inputRef} />
    </div>
  );
}
