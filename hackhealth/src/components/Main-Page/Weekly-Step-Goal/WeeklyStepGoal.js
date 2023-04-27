import { useState } from "react";
import "./WeeklyGoal.css"

function WeeklyGoal(props) {

  return (
    <div className="weekly-goal">
      <div className="goal-form">
      <h3>Set Your Weekly Step Goal</h3>
      <img src="https://i.ibb.co/Chq4sQm/Untitled-300-300px.png" alt="steps-shoes"></img>
      <input onChange={props.handleWeeklyEnterChange} type="text" />
      <button onClick={props.handleEnterClick}>Submit</button>
      </div>
      <div className="goal-letter">
      <h3>Weekly Step Goal</h3>
      {props.showWeeklyStepGoal && <h2 className="step-goal">{props.weeklyStepGoal} Steeps</h2>}
      </div>
    
    </div>
  );
}

export default WeeklyGoal;
