import React from "react";
import "./Daily-Progress.css";
import { useState } from "react";
// create a new component called DailyProgress
// this component will be used to display the daily progress of the user
// it will contain 3 sections in the first section it will have a h1 saying the day, in the second section it will have a P element saying how many steps did you do today? also an image and an input box to type in daily step count and a button saying enter
// in the third section it will have a h2 element saying stats and badges and 3 seperate p elements and img elements

function DailyProgress(props) {
  const [showSteps, setShowSteps] = useState(false);
  const [inputSteps, setInputSteps] = useState("");

  const handleEnterClick = (event) => {
    setShowSteps(true);
    props.setDaySteps(props.selectedDay, inputSteps);
    setInputSteps("");
  };

  return (
    <div className="Daily-Progress">
      <div className="day-name">
        <h1>{props.getDayName(props.selectedDay)}</h1>
      </div>
      <div className="Step-Counter">
        <p>How many steps did you do today?</p>
        <img
          src="https://t3.ftcdn.net/jpg/02/68/83/92/360_F_268839256_ih7a6ashzMP99VaQ3EGnqKFZcTd35S9e.jpg"
          alt="steps"
        />
        <input
          className="Step-Input"
          type="text"
          placeholder="Enter your steps"
          value={inputSteps}
          onChange={(event) => setInputSteps(event.target.value)}
        />
        <button
          onClick={(event) => {
            handleEnterClick(event);
          }}
        >
          Enter
        </button>
        {showSteps && <h2>{props.getDaySteps(props.selectedDay)}</h2>}
      </div>
      <div className="stats">
        <h2>Stats and Badges</h2>
        <div className="Progress-Text">
          <p>Congrats blah blah</p>
          <p>Congrats blah blah</p>
          <p>Congrats blah blah</p>
          <img src="./medal (1).png" alt="steps" />
          <img src="./medal (2).png" alt="steps" />
          <img src="./medal.png" alt="steps" />
        </div>
      </div>
    </div>
  );
}

export default DailyProgress;
