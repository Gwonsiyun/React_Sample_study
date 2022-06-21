import React from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

function HookUsePreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </>
  );
}
export default HookUsePreventLeave;