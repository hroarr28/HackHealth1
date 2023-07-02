import {useState} from "react";
import "./WeeklyGoal.css";

function WeeklyGoal(props) {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.handleEnterClick();
    }
  }

  return (
    <div className='weekly-goal'>
      <h2>Set Your Weekly Step Goal</h2>
      <img
        src='https://i.ibb.co/H2gvXjd/Untitled-design-14.png'
        alt='steps-shoes'
      ></img>
      <div className='goal-container'>
        <div className='goal-form'>
          <input
            className='weekly-input'
            onChange={(event) => props.setWeeklyStepGoal(event.target.value)}
            type='text'
            placeholder='Enter your step goal'
            value={props.weeklyStepGoal}
            onKeyDown={handleKeyDown}
            aria-label='Weekly Step Goal'
          />
          <button onClick={props.handleEnterClick}>Submit</button>
        </div>
        <div className='goal-letter'>
          {props.showWeeklyStepGoal && (
            <h2 className='step-goal'>{props.weeklyStepGoal} Steps</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeeklyGoal;
