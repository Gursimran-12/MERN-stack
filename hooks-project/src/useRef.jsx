import { useEffect, useRef, useState } from "react";
import "./App.css";

function UseRef() {
  const input = useRef("xyz")
  

  function handleBtnClick(){
    input.current.click()
  }
  return (
    <>
     <input ref={input} type="file" style={{display: "none"}} />
     <button onClick={handleBtnClick}>Upload user file</button>
    </>
  );
}

export default UseRef;