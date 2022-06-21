import React, { useState } from "react";

const useInput = (intialValue, validator) => {
  const [value, setValue] = useState(intialValue);
  // const onChange = event => {
  //     let willUpdate = true;
  //     const {//구조분해할당
  //         target: {value}
  //     } = event;
  //     if(typeof validator === "function"){
  //         willUpdate = validator(value);
  //     }
  //     if(willUpdate){
  //         setValue(value);
  //     }
  // }
  const onChange = ({ target: { value } }) => {
    //이와같이 구조분해할당을 넘어오는값에서 바로 할 수 있다 (props)
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const HookUseInput = () => {
  const maxLen = (value) => {
    // return value.length < 10;
    return !value.includes("@");
  };
  const name = useInput("Mr.", maxLen);

  return (
    <>
      <h1>Hello</h1>
      <input placeholder={"Name"} {...name} />
    </>
  );
};
export default HookUseInput;
