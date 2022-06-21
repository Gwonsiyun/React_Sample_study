import React from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    // console.log(window.confirm(message));
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function HookUseConfirm() {
  const deleteWorld = () => console.log("Deleting the world..");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <>
      <button onClick={confirmDelete}>Delete the world</button>
    </>
  );
}
export default HookUseConfirm;
