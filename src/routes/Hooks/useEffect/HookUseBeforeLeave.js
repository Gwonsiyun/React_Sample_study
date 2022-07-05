import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    if (typeof onBefore !== "function") return;
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  const handle = ({ clientY }) => {
    if (clientY <= 0) {
      onBefore();
    }
  };
};

function HookUseBeforeLeave() {
  const begForLife = () => {
    console.log("pls dont leave");
  };
  useBeforeLeave(begForLife);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
export default HookUseBeforeLeave;
