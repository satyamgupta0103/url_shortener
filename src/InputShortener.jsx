import { useState } from "react";

function InputShortener({ setInputValue }) {
  const [value, setValue] = useState("");

  function handleClick() {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten here"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button onClick={handleClick}>SHORTEN</button>
      </div>
    </div>
  );
}

export default InputShortener;
