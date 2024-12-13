import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputShortener from "./InputShortener";
import BackgroundAnimation from "./BackgroundAnimation";

function App() {
  return (
    <>
      <div className="container">
        <InputShortener />
        <BackgroundAnimation />
      </div>
    </>
  );
}

export default App;
