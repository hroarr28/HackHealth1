import React from "react";
import DailyProgress from "./Daily-Progress/Daily-Progress";
import DayButtons from "./Left-Side-Nav-Bar/Left-Side-Nav-Bar";
import WeeklyProgress from "./Weekly-Progress/WeeklyProgress";
import { useState } from "react";
// make a main page component

function MainPage() {
  // make a days array with the days of the week inside an id object

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

  //State to store daily steps

  function handleClick(day) {
    setSelectedDay(day);
  }

  function Button(props) {
    return (
      <button onClick={() => handleClick(props.day)}>{props.label}</button>
    );
  }

  function getDayName(dayId) {
    const day = days.find((d) => d.id === dayId);
    return day ? day.day : "";
  }
  //map through the days array to find the day by id

  // how do i acces specific days in the array by id?

  // how do i use a key to access the id of the day?

  // use a .map function to display the days based off the id

  return (
    <>
      <div className="Main-Page">
        <DayButtons
          Button={Button}
          getDayName={getDayName}
          selectedDay={selectedDay}
          days={days}
        />
        <WeeklyProgress />
        <DailyProgress selectedDay={selectedDay} getDayName={getDayName} />
      </div>
    </>
  );
}

export default MainPage;
