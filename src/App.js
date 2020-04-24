import React, { useRef } from "react";
import "./App.css";
import Onglet from "./Composants/Onglet";

function App() {
  let cursorRef = useRef();

  const mousePos = (e) => {
    cursorRef.current.setAttribute(
      "style",
      `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`
    );
  };

  return (
    <div onMouseMove={mousePos} className="App">
      <div ref={cursorRef} className="custom-cursor"></div>
      <Onglet />
    </div>
  );
}

export default App;
