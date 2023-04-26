import { useState } from "react";

function WeeklyGoal(props) {

  return (
    <div>
      <h3>Set Your Weekly Step Goal</h3>
      <img src="../../../../images/running-shoes.jpg" alt="running shoe" />
      <input onChange={props.handleWeeklyEnterChange} type="text" />
      <button onClick={props.handleEnterClick}>Submit</button>
      {props.showWeeklyStepGoal && <h2>{props.weeklyStepGoal}</h2>}
    
    </div>
  );
}

export default WeeklyGoal;
