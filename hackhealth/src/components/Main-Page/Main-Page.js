import React from "react";
import DailyProgress from "./Daily-Progress/Daily-Progress";
import DayButtons from "./Left-Side-Nav-Bar/Left-Side-Nav-Bar";
import WeeklyProgress from "./Weekly-Progress/WeeklyProgress";
import { useState } from "react";
import "./main-page.css";
import "./Left-Side-Nav-Bar/Left-Side-Nav-Bar.css";
import "./main-page.css";
// make a main page component

function MainPage(props) {
  const [weeklyStepGoal, setWeeklyStepGoal] = useState(0);
  // create use state to display weekly step goal on click
  const [showWeeklyStepGoal, setShowWeeklyStepGoal] = useState(false);

  const handleWeeklyEnterChange = (event) => {
    setWeeklyStepGoal(event.target.value);
  };

  const handleEnterClick = () => {
    setShowWeeklyStepGoal(true);
  };

  const days = [
    { id: 1, day: "Monday" },
    { id: 2, day: "Tuesday" },
    { id: 3, day: "Wednesday" },
    { id: 4, day: "Thursday" },
    { id: 5, day: "Friday" },
    { id: 6, day: "Saturday" },
    { id: 7, day: "Sunday" },
  ];

  const [selectedDay, setSelectedDay] = useState("");
  const [mondaySteps, setMondaySteps] = useState("");
  const [tuesdaySteps, setTuesdaySteps] = useState("");
  const [wednesdaySteps, setWednesdaySteps] = useState("");
  const [thursdaySteps, setThursdaySteps] = useState("");
  const [fridaySteps, setFridaySteps] = useState("");
  const [saturdaySteps, setSaturdaySteps] = useState("");
  const [sundaySteps, setSundaySteps] = useState("");
  const [stepsRemainder, setStepsRemainder] = useState(0);

  function handleClick(day) {
    setSelectedDay(day);
  }

  function Button(props) {
    return (
      <button className="nav-button" onClick={() => handleClick(props.day)}>{props.label}</button>
    );
  }

  function getDayName(dayId) {
    const day = days.find((d) => d.id === dayId);
    return day ? day.day : "";
  }

  function getDaySteps(dayId) {
    switch (dayId) {
      case 1:
        return mondaySteps;
      case 2:
        return tuesdaySteps;
      case 3:
        return wednesdaySteps;
      case 4:
        return thursdaySteps;
      case 5:
        return fridaySteps;
      case 6:
        return saturdaySteps;
      case 7:
        return sundaySteps;
      default:
        return "";
    }
  }

  function stepRemainderResult() {
    const totalSteps =
      parseInt(mondaySteps) +
      parseInt(tuesdaySteps) +
      parseInt(wednesdaySteps) +
      parseInt(thursdaySteps) +
      parseInt(fridaySteps) +
      parseInt(saturdaySteps) +
      parseInt(sundaySteps);
    const remainder = weeklyStepGoal - totalSteps;
    console.log(remainder, "remainder");
    setStepsRemainder(remainder);
  }

  function setDaySteps(dayId, steps) {
    switch (dayId) {
      case 1:
        setMondaySteps(steps);
        break;
      case 2:
        setTuesdaySteps(steps);
        break;
      case 3:
        setWednesdaySteps(steps);
        break;
      case 4:
        setThursdaySteps(steps);
        break;
      case 5:
        setFridaySteps(steps);
        break;
      case 6:
        setSaturdaySteps(steps);
        break;
      case 7:
        setSundaySteps(steps);
        break;
      default:
        break;
    }
  }

  return (

      <div className="main">
        
        <DayButtons
          Button={Button}
          getDayName={getDayName}
          selectedDay={selectedDay}
          days={days}
        />
        <WeeklyProgress
          stepsRemainder={stepsRemainder}
          stepRemainderResult={stepRemainderResult}
          showWeeklyStepGoal={showWeeklyStepGoal}
          weeklyStepGoal={weeklyStepGoal}
          handleEnterClick={handleEnterClick}
          handleWeeklyEnterChange={handleWeeklyEnterChange}
          user={props.user}
        />
        <DailyProgress
          setDaySteps={setDaySteps}
          getDaySteps={getDaySteps}
          selectedDay={selectedDay}
          getDayName={getDayName}
          stepRemainderResult={stepRemainderResult}
        />
        <div className='quote-container'>
          <h2>"here we have the quotes"</h2>
          <img src="https://www.univariety.com/blog/wp-content/uploads/2014/08/motivational-goals.jpg"/>
        </div>
      </div>
  );
}

export default MainPage;
