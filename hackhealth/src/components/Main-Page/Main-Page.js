import React from "react";
import DailyProgress from "./Daily-Progress/Daily-Progress";
import DayButtons from "./Left-Side-Nav-Bar/Left-Side-Nav-Bar";
import WeeklyProgress from "./Weekly-Progress/WeeklyProgress";
// make a main page component

function MainPage() {
  const days = [
    {
      id: 1,
      day: "Monday",
    },

    {
      id: 2,
      day: "Tuesday",
    },

    {
      id: 3,
      day: "Wednesday",
    },

    {
      id: 4,
      day: "Thursday",
    },

    {
      id: 5,
      day: "Friday",
    },

    {
      id: 6,
      day: "Saturday",
    },

    {
      id: 7,
      day: "Sunday",
    },
    ];
    
    //map through the days array to find the day by id

    // how do i acces specific days in the array by id?

    // how do i use a key to access the id of the day?

    
    

    
    const day = days.map((day) => {
        console.log(day.id)
        return day.id
       
    });
 

    return (
    <> 
    <div className='Main-Page'>
          <DayButtons key = { day.id } day={day} />
      <WeeklyProgress />;
      <DailyProgress key = { day.id } day={day}/>
    </div>
            </>
  );
}

export default MainPage;
