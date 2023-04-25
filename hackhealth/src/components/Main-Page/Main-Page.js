import React from 'react';
import DailyProgress from './Daily-Progress/Daily-Progress';
import DayButtons from './Left-Side-Nav-Bar'
import WeeklyProgress from "./Weekly-Progress/WeeklyProgress";
// make a main page component

function MainPage() {
    return (
        <div className="Main-Page">
        <DailyProgress />
        <WeeklyProgress />;
        </div>
    );
}
    
export default MainPage;

