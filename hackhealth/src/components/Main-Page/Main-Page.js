
import React from 'react';
import DailyProgress from './Daily-Progress/Daily-Progress';
import DayButtons from './Left-Side-Nav-Bar'
// make a main page component

function MainPage() {
    return (
        <div className="Main-Page">
        <DailyProgress />
        </div>
    );
}
    
export default MainPage;