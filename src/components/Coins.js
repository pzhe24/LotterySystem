import React from "react";

const Coins = (props) => {
  const coins = [1, 5, 10, 20];

  return (
    <div className="col-leftside">
      <div className="extraSpace" />
      {coins.map((value) => (
        <button className="coinButton" onClick={() => props.addBet(value)}>
          ${value}
        </button>
      ))}
    </div>
  );
};

export default Coins;
