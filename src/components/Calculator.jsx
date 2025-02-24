import Button from "./Button";
import Display from "./Display";

import "../styles/Calculator.css";

export default function Calculator() {
  return (
    <div className="main">
      <Display value="0"></Display>
      <div className="button-grid">
        <Button value="AC"></Button>
        <Button value="%"></Button>
        <Button value="/"></Button>
        <Button value="X"></Button>
        <Button value="7"></Button>
        <Button value="8"></Button>
        <Button value="9"></Button>
        <Button value="-"></Button>
        <Button value="4"></Button>
        <Button value="5"></Button>
        <Button value="6"></Button>
        <Button value="+"></Button>
        <Button value="1"></Button>
        <Button value="2"></Button>
        <Button value="3"></Button>
        <Button value="="></Button>
        <Button value="0" className="zero-btn"></Button>
        <Button value="."></Button>
      </div>
    </div>
  );
}
