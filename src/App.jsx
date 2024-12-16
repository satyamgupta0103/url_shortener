import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputShortener from "./InputShortener";
import BackgroundAnimation from "./BackgroundAnimation";
import LinkResult from "./LinkResult";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="container">
        <InputShortener setInputValue={setInputValue} />
        <BackgroundAnimation />
        <LinkResult inputValue={inputValue} />
      </div>
    </>
  );
}

export default App;
