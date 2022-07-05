import React, { useRef, useState } from "react";

const useRefLog = () => {
  const element = useRef();
  // console.log(element);
  // console.log(element.current);
  return element;
};
const HookUseRef = () => {
  const [inputVal, setInputVal] = useState("");
  const ChInputVal = (e) => {
    setInputVal(e.target.value);
  };
  const el = useRefLog();
  const el1 = useRefLog();
  const el2 = useRef();
  console.log(el2);
  const [Dtarget, setDtarget] = useState(true);
  const divClick = ({ current }) => {
    console.log(current);
    current.style.transition = `opacity 5s`;
    // if (Dtarget) {
    //   target.style.opacity = 0;
    //   setDtarget(false);
    // } else {
    //   target.style.opacity = 1;
    //   setDtarget(true);
    // }
    current.style.opacity = Dtarget ? 0 : 1;
    setDtarget((s) => !s);
  };
  const div11 = useRef();
  return (
    <>
      <h1 ref={el} style={{ color: "red" }}>
        test
      </h1>
      <input ref={el1} onChange={ChInputVal} value={inputVal} />
      <h2 ref={el2}>tttt</h2>
      <div
        onClick={divClick}
        ref={div11}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          border: "1px solid black"
        }}
      >
        test
      </div>
      <button onClick={() => divClick(div11)}>test</button>
    </>
  );
};
export default HookUseRef;
