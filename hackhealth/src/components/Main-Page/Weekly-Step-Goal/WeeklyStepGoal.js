import { useState } from "react";
import "./WeeklyGoal.css";

function WeeklyGoal(props) {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const weeklyStepGoal = event.target.value.trim();

      if (!weeklyStepGoal || isNaN(weeklyStepGoal)) {
        alert("You silly bootcamper! You should know what a number is!");
      } else {
        props.handleEnterClick();
        event.target.value = "";
      }
    }
  }

  return (
    <div className="weekly-goal">
      <div className="goal-form">
        <h3>Set Your Weekly Step Goal</h3>
        <img
          src="https://i.ibb.co/Chq4sQm/Untitled-300-300px.png"
          alt="steps-shoes"
        ></img>
        <input
          onChange={props.handleWeeklyEnterChange}
          type="text"
          onKeyDown={handleKeyDown}
        />
        <button onClick={props.handleEnterClick}>Submit</button>
      </div>
      <div className="goal-letter">
        <h3>Weekly Step Goal</h3>
        {props.showWeeklyStepGoal && (
          <h2 className="step-goal">{props.weeklyStepGoal} Steps</h2>
        )}
      </div>
    </div>
  );
}

export default WeeklyGoal;
