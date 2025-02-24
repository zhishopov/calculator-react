import Button from "./Button";
import Display from "./Display";

import "../styles/Calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isNewNumber, setIsNewNumber] = useState(false);

  const buttonClickHandler = (value) => {
    if (!isNaN(value) || value === ".") {
      numberHandler(value);
    } else {
      operatorHandler(value);
    }
  };

  const numberHandler = (num) => {
    if (isNewNumber) {
      setCurrentValue(num);
      setIsNewNumber(false); // Reset after first number entry
    } else {
      setCurrentValue((previous) =>
        previous === "0" && num !== "." ? num : previous + num
      );
    }
  };

  const operatorHandler = (operator) => {
    if (operator === "AC") {
      setCurrentValue("0");
      setPreviousValue(null);
      setOperator(null);
      setIsNewNumber(false);
    } else if (operator === "=") {
      calculate();
    } else {
      setPreviousValue(currentValue);
      setOperator(operator);
      setIsNewNumber(true);
    }
  };

  const calculate = () => {
    if (!operator || previousValue === null) {
      return;
    }

    let result;
    const previous = Number(previousValue);
    const current = Number(currentValue);

    switch (operator) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "X":
        result = previous * current;
        break;
      case "/":
        result = current !== 0 ? previous / current : "Error";
        break;
      case "%":
        result = previous % current;
        break;
      default:
        return;
    }
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className="main">
      <Display value={currentValue}></Display>
      <div className="button-grid">
        <Button value="AC" onClick={() => buttonClickHandler("AC")}></Button>
        <Button value="%" onClick={() => buttonClickHandler("%")}></Button>
        <Button value="/" onClick={() => buttonClickHandler("/")}></Button>
        <Button value="X" onClick={() => buttonClickHandler("X")}></Button>
        <Button value="7" onClick={() => buttonClickHandler("7")}></Button>
        <Button value="8" onClick={() => buttonClickHandler("8")}></Button>
        <Button value="9" onClick={() => buttonClickHandler("9")}></Button>
        <Button value="-" onClick={() => buttonClickHandler("-")}></Button>
        <Button value="4" onClick={() => buttonClickHandler("4")}></Button>
        <Button value="5" onClick={() => buttonClickHandler("5")}></Button>
        <Button value="6" onClick={() => buttonClickHandler("6")}></Button>
        <Button value="+" onClick={() => buttonClickHandler("+")}></Button>
        <Button value="1" onClick={() => buttonClickHandler("1")}></Button>
        <Button value="2" onClick={() => buttonClickHandler("2")}></Button>
        <Button value="3" onClick={() => buttonClickHandler("3")}></Button>
        <Button value="=" onClick={() => buttonClickHandler("=")}></Button>
        <Button value="0" onClick={() => buttonClickHandler("0")}></Button>
        <Button value="." onClick={() => buttonClickHandler(".")}></Button>
      </div>
    </div>
  );
}
