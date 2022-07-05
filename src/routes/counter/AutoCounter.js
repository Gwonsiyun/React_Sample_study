import React, { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);
  console.log(`랜더링... count: ${count}`);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((count) => count + 1), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <p>자동 카운트: {count}</p>;
}

export default AutoCounter;
