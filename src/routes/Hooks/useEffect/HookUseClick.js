import React, { useEffect, useRef, useState } from "react";
//https://nomadcoders.co/react-hooks-introduction/lectures/1595 너무 어려운걸! 이해가 가지 않소!
const useClick = (onclick) => {
  // if(typeof onclick !== "function"){
  //     return ;
  // }
  const element = useRef();
  console.log("before render", element.current);
  useEffect(() => {
    console.log("after render", element.current);
    if (element.current) {
      console.log("mount");
      element.current?.addEventListener("click", onclick);
    }
    return () => {
      console.log("unmount");
      if (element.current) {
        element.current?.removeEventListener("click", onclick);
      }
    };
  }, []);
  return element;
};

function Test() {
  const potato = useRef();
  setTimeout(() => potato.current?.focus(), 5000);

  const seyHello = () => {
    console.log("sey hello");
  };

  const title = useClick(seyHello);
  return (
    <>
      <h1 ref={title}>Hi</h1>
      <input ref={potato} placeholder={"la"} />
    </>
  );
}

function HookUseClick() {
  const [flag, setFlag] = useState(true);
  const handleClick = () => setFlag((f) => !f);
  return (
    <>
      {flag && <Test />}
      <button onClick={handleClick}>test</button>
    </>
  );
}
export default HookUseClick;
