import "./styles.css";
import React, { useState } from "react";

function Option({ value, onOptionClick }) {
  return (
    <button className="option" onClick={onOptionClick}>
      {value}
    </button>
  );
}

export default function App() {
  const [score, updateScore] = useState(0);
  const [win, updateWin] = useState("Start Playing");

  function optionClick(uchoice) {
    var cchoice = Math.floor(Math.random() * (3 - 0) + 0);
    console.log("computer plays " + cchoice);

    if (uchoice === 0 && cchoice === 0) {
      updateWin("Player's Rock = Computer's Rock");
    } else if (uchoice === 0 && cchoice === 1) {
      updateWin("Player's Rock < Computer's Paper");
      updateScore(score - 1);
    } else if (uchoice === 0 && cchoice === 2) {
      updateWin("Player's Rock > Computer's Scissors");
      updateScore(score + 1);
    } else if (uchoice === 1 && cchoice === 0) {
      updateWin("Player's Paper > Computer's Rock");
      updateScore(score + 1);
    } else if (uchoice === 1 && cchoice === 1) {
      updateWin("Player's Paper = Computer's Paper");
    } else if (uchoice === 1 && cchoice === 2) {
      updateWin("Player's Paper < Computer's Scissors");
      updateScore(score - 1);
    } else if (uchoice === 2 && cchoice === 0) {
      updateWin("Player's Scissors < Computer's Rock");
      updateScore(score - 1);
    } else if (uchoice === 2 && cchoice === 1) {
      updateWin("Player's Scissors > Computer's Paper");
      updateScore(score + 1);
    } else if (uchoice === 2 && cchoice === 2) {
      updateWin("Player's Scissors = Computer's Scissors");
    } else {
      updateWin("Whoops, try again");
    }

    console.log("user plays " + uchoice);
    return;
  }

  return (
    <div className="Page">
      <div className="Banner">
        <h1> Rock Paper Scissors </h1>
      </div>

      <div className="Options">
        <Option value="Rock" onOptionClick={() => optionClick(0)} />
        <Option value="Paper" onOptionClick={() => optionClick(1)} />
        <Option value="Scissors" onOptionClick={() => optionClick(2)} />
      </div>
      <h1 className="Win"> {win}</h1>
      <h1 className="Score">Score: {score} </h1>
    </div>
  );
}

//<img src="https://cdn-icons-png.flaticon.com/512/4953/4953463.png"/>
//<img src="https://icons.veryicon.com/png/o/miscellaneous/thick-linear-icon-library/paper-15.png"/>
//<img src="https://cdn-icons-png.flaticon.com/512/541/541957.png"/>
