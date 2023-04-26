import { useState } from "react";
import Distance from "../Distance/Distance";
import WeeklyGoal from "../Weekly-Step-Goal/WeeklyStepGoal";

// props needed: weekly step goal
//               daily steps

function WeeklyProgress(props) {
  const [weeklyStepGoal, setWeeklyStepGoal] = useState(0);
  // create use state to display weekly step goal on click
const [showWeeklyStepGoal, setShowWeeklyStepGoal] = useState(false);

  console.log(weeklyStepGoal)

  const handleWeeklyEnterChange = (event) => {
    setWeeklyStepGoal(event.target.value);
  
  };

  const handleEnterClick = () => {
    setShowWeeklyStepGoal(true);

    
  };


  
  return (
    <div>
      <div>
      <h1>Welcome Back</h1>
      <WeeklyGoal stepRemainderResult={props.stepRemainderResult} showWeeklyStepGoal={showWeeklyStepGoal} weeklyStepGoal={weeklyStepGoal} handleEnterClick={handleEnterClick} handleWeeklyEnterChange={handleWeeklyEnterChange} />
        <p>Check how far away you are from your weekly goal </p>
        <h1> </h1>
        <button onClick={() => {props.stepRemainderResult()}}>Check here</button>
        <h3>{props.stepsRemainder} steps away</h3>
      </div>
      <div>
       
      </div>
      <div>
        <Distance />
      </div>
    </div>
  );
}

export default WeeklyProgress;
