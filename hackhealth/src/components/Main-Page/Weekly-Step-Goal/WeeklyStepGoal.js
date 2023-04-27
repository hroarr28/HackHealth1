import {useState} from "react";
import "./WeeklyGoal.css";

function WeeklyGoal(props) {
  return (
    <div className='weekly-goal'>
      
      <h2>Set Your Weekly Step Goal</h2>
      <img
            src='https://i.ibb.co/DLqykQk/Untitled-design-12.png'
            alt='steps-shoes'
          ></img>
      <div className='goal-container'>
        <div className='goal-form'>
          
          <input className="weekly-input" onChange={props.handleWeeklyEnterChange} type='text' />
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
