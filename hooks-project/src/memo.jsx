import React, { useState } from "react";
import HelloWorld from "./components/hello";
import MemoPrac from "./components/button"

const Memo = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }
  return (
    <>
      <h1> {counter} </h1>
      <button onClick={handleClick}>Re-Render</button>

      <HelloWorld  />
      <MemoPrac />
    </>
  );
};

export default Memo;
