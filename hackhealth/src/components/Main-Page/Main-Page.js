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

  const handleEnterClick = (event) => {
    if (!weeklyStepGoal || isNaN(weeklyStepGoal)) {
      alert("Please enter a valid number for weekly step goal.");
    } else {
      setShowWeeklyStepGoal(true);
    }
  };

  const days = [
    { id: 0, day: "Sunday" },
    { id: 1, day: "Monday" },
    { id: 2, day: "Tuesday" },
    { id: 3, day: "Wednesday" },
    { id: 4, day: "Thursday" },
    { id: 5, day: "Friday" },
    { id: 6, day: "Saturday" },
  ];

  const today = new Date().getDay();
  const todaysDay = days.find((d) => d.id === today);

  const [selectedDay, setSelectedDay] = useState(todaysDay.id);
  const [mondaySteps, setMondaySteps] = useState(0);
  const [tuesdaySteps, setTuesdaySteps] = useState(0);
  const [wednesdaySteps, setWednesdaySteps] = useState(0);
  const [thursdaySteps, setThursdaySteps] = useState(0);
  const [fridaySteps, setFridaySteps] = useState(0);
  const [saturdaySteps, setSaturdaySteps] = useState(0);
  const [sundaySteps, setSundaySteps] = useState(0);
  const [stepsRemainder, setStepsRemainder] = useState(0);

  console.log(selectedDay.day);

  function handleClick(day) {
    setSelectedDay(day);
  }

  function Button(props) {
    return (
      <button className="nav-button" onClick={() => handleClick(props.day)}>
        {props.label}
      </button>
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
      case 0:
        return sundaySteps;
      default:
        return "";
    }
  }

  const totalSteps =
    parseInt(mondaySteps) +
    parseInt(tuesdaySteps) +
    parseInt(wednesdaySteps) +
    parseInt(thursdaySteps) +
    parseInt(fridaySteps) +
    parseInt(saturdaySteps) +
    parseInt(sundaySteps);

  function stepRemainderResult() {
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
      case 0:
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
        totalSteps={totalSteps}
      />
      <DailyProgress
        setDaySteps={setDaySteps}
        getDaySteps={getDaySteps}
        selectedDay={selectedDay}
        getDayName={getDayName}
        stepRemainderResult={stepRemainderResult}
      />
      <div className="quote-container">
        <h2>"here we have the quotes"</h2>
        <img
          src="https://www.univariety.com/blog/wp-content/uploads/2014/08/motivational-goals.jpg"
          alt="an illustrated avatar"
        />
      </div>
    </div>
  );
}

export default MainPage;
