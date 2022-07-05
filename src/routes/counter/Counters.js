import React from "react";
import "./styles.css";
import Counter from "./Counter";
import AutoCounter from "./AutoCounter";
import ManualCounter from "./ManualCounter";
//https://www.daleseo.com/react-hooks-use-ref/
export default function Counters() {
  return (
    <div className={"Counters"}>
      <Counter />
      <hr />
      <AutoCounter />
      <hr />
      <ManualCounter />
    </div>
  );
}
