import { useState } from "react";

function InputShortener() {
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input type="text" placeholder="Paste a link to shorten here"></input>
        <button>shorten</button>
      </div>
    </div>
  );
}

export default InputShortener;
