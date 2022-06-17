import React from "react";
import Header from "./Header";
import Coins from "./Coins";
import Numbers from "./Numbers";
import Results from "./Results";
import Total from "./Total";
import "../css/App.css";
import { useState } from "react";

const App = () => {
  //number selected state
  const [numSelected, setNumSelected] = useState([]);
  const [ticket, setTicket] = useState([0]);
  const [totalBet, setTotalBet] = useState(0);
  const [ticketBet, setTicketBet] = useState(0);

  //create an array with numbers 1-20
  let numbers = [];
  for (let i = 1; i <= 20; i++) {
    numbers.push(i);
  }

  //Functions
  //Selecting the number
  const selectNum = (num) => {
    if (numSelected.length < 5) {
      setNumSelected([...numSelected, num]);
    }
    if (numSelected.includes(num)) {
      deselectNum(num);
    }
    if (numSelected.length === 5 && !numSelected.includes(num)) {
      alert("You can only have 5 numbers");
    }
  };

  //deselecting the number
  const deselectNum = (num) => {
    const deNum = numSelected.filter((number) => {
      return number !== num;
    });
    setNumSelected(deNum);
  };

  //clearing the numbers selected and the total bet.
  const clearNum = () => {
    setNumSelected([]);
    setTotalBet(0);
  };

  //generate 5 random numbers from 1-20
  const randomNums = () => {
    const selectedNums = [];
    while (selectedNums.length < 5) {
      const num = Math.floor(Math.random() * 20 + 1);
      if (selectedNums.indexOf(num) === -1) {
        selectedNums.push(num);
      }
    }
    setNumSelected(selectedNums);
  };

  const cash = () => {
    if (numSelected.length === 5 && totalBet > 0) {
      setTicket([...numSelected]);
      setTicketBet(totalBet);
      setNumSelected([]);
      setTotalBet(0);
    } else if (numSelected.length < 5) {
      alert("You must choose 5 numbers!");
    } else if (totalBet === 0) {
      alert("You have to enter atleast $1 to buy the ticket.");
    }
  };

  //add up bet according to value
  const addBet = (coin) => {
    if (numSelected.length < 5) {
      alert("You must pick 5 Numbers first");
    } else {
      const total = totalBet + coin;
      setTotalBet(total);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Coins addBet={addBet} />
        <div className="col-mid">
          <Numbers
            numbersList={numbers}
            NumsSelected={numSelected}
            selectNum={selectNum}
            clearNum={clearNum}
            randNums={randomNums}
            cash={cash}
          />
        </div>
        <Results ticket={ticket} ticketBet={ticketBet} />
        <Total NumSelected={numSelected} totalBet={totalBet} />
      </div>
    </div>
  );
};

export default App;
