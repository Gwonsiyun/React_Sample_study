import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function HookUseFadeIn() {
  const fadeInH1 = useFadeIn(1);
  const fadeInP = useFadeIn(5);
  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalalala</p>
    </>
  );
}
export default HookUseFadeIn;
