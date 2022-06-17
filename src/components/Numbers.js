import React from "react";
import NumButton from "./NumButton";

const Numbers = (props) => {
  return (
    <div>
      <div className="numButtons">
        {props.numbersList.map((number) => (
          <NumButton
            number={number}
            NumsSelected={props.NumsSelected}
            selectNum={props.selectNum}
          />
        ))}
      </div>

      <div className="bigButtons">
        <button id="randButton" onClick={props.randNums}>
          RANDOM
        </button>
        <button id="cashButton" onClick={props.cash}>
          CASH
        </button>
        <button id="clearButton" onClick={props.clearNum}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Numbers;
