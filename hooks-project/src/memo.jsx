import React, { useState } from "react";
import HelloWorld from "./components/hello";

const Memo = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <>
      <h1>This is Title</h1>
      <button onClick={handleClick}>Re-Render</button>

      <HelloWorld  />
    </>
  );
};

export default Memo;