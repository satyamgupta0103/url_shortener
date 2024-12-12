import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputShortener from "./InputShortener";

function App() {
  return (
    <>
      <div className="container">
        <InputShortener />
      </div>
    </>
  );
}

export default App;