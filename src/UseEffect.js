//useEffect works for handle side effects ,side effect means calling api,adding eventListener that is beyond
//of component,useEffect is also works like handle the life cycle methods,in class component we have life
//cycle like componentDidMount,componentDidUpdate,componentWillUnmout,to handle these type of you can think
//useEffect handle all this by only one hooks by useEffect.
//by default useeffect runs every render ,but we can handle this by array dependency,if we put second
//parameter as empty array it will run only once,you can pass the value inside that on which value you
//want to call the useEffect.
//useeffect also return statement which is used for unmount/cleanup like unsubscription,cancel network request etc

import React, { useEffect, useState } from "react";
export default function UseEffect() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounting is calling");
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    return () => {
      console.log("unmounting is calling");
    };
  }, [text]);
  return (
    <div>
      <h1>
        {text} | {count}
      </h1>
      <button onClick={() => setText("posts")}>POSTS</button>
      <button onClick={() => setText("albums")}>ALBUMS</button>
      <button onClick={() => setText("users")}>USERS</button>
      <button onClick={() => setText("comments")}>COMMENTS</button>
      <button onClick={() => setText("todos")}>TODOS</button>
      <button onClick={() => setCount(count + 1)}>COUNT</button>
      {items.map((item) => {
        return (
          <>
            <pre key={item.id}>{JSON.stringify(item)}</pre>
            <hr />
          </>
        );
      })}
    </div>
  );
}
