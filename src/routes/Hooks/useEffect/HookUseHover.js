// Usage
import React, { useEffect, useRef, useState } from "react";
///////////노마드코더는 강의를 올리지않았음 정확한 이유는 모르겠지만 오류때문인듯
function HookUseHover() {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}
// Hook
function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
export default HookUseHover;
