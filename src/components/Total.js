import React from "react";

const Total = (props) => {
  return (
    <div className="col-rightside">
      <div className="numbersSelected">
        <h2>Numbers Selected :</h2>
        {props.NumSelected.map((num) => (
          <p>Mark: {num}</p>
        ))}
        <div className="totalBet">
          <h2>Total: ${props.totalBet}</h2>
        </div>
      </div>
    </div>
  );
};

export default Total;
