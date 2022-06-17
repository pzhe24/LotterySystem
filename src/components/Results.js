import React from "react";

const Results = (props) => {
  let ticketNums = [];
  return (
    <div className="col-mid">
      <div className="col-mid-bottom">
        <div className="results">
          {props.ticket.map((ticket) => {
            ticketNums.push(ticket);
            return " ";
          })}
          <p>
            Numbers Chosen: {ticketNums.join(", ")} with ${props.ticketBet}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
