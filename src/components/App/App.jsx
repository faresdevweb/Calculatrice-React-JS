import React, { useState } from "react";
import "./App.css";
import Screen from "../Screen/Screen";
import Boutton from "../Boutton/Boutton";

function App() {
  const [display, setDisplay] = useState("");

  const specialCharacter = ["+", "-", "/", "*", "."];

  
  const handleClick = (event) => {
    const value = event.target.dataset.value;
    event.preventDefault();

    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      const result = eval(display);
      setDisplay(result);
    } else if (
      specialCharacter.includes(value) &&
      typeof display === "string" &&
      (specialCharacter.includes(display.slice(-1)) || (value === "." && display.split(/[-+*/]/).slice(-1)[0].includes('.')))
    ) {
      return;
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };
  

  return (
    <div className="container">
      <Screen screenValue={display} />
      <div className="container-button">
        {[
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ".",
          "+",
          "-",
          "*",
          "/",
          "=",
          "C"
        ].map((label, index) => {
          const isOperator = ["+", "-", "*", "/"].includes(label);
          const buttonClass = `calculator-button-${index + 1} button ${
            label === "="
              ? "evaluation"
              : isOperator
              ? "operator"
              : ""
          }`;
          return (
            <Boutton
              key={label}
              value={label}
              className={buttonClass}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

