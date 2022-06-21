import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  console.log(initialTitle);
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
function HookUseTitle() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <>
      <div>Hi</div>
    </>
  );
}
export default HookUseTitle;
