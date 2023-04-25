import React from "react";
import "./Daily-Progress.css";
// create a new component called DailyProgress
// this component will be used to display the daily progress of the user
// it will contain 3 sections in the first section it will have a h1 saying the day, in the second section it will have a P element saying how many steps did you do today? also an image and an input box to type in daily step count and a button saying enter
// in the third section it will have a h2 element saying stats and badges and 3 seperate p elements and img elements

function DailyProgress(props) {




  return (
      <div className='Daily-Progress'>
          {/* //pull the day from the props */}
          {/* // make a .map function to display the days based of the id */}
          
                    
      <h1>{props.day}</h1>
      <div className='Step-Counter'>
        <p>How many steps did you do today?</p>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/3011/3011270.svg'
          alt='steps'
        />
        <input type='text' placeholder='Enter your steps' />
        <button>Enter</button>
      </div>
      <div>
        <h2>Stats and Badges</h2>
        <div className="Progress-Text">
          <p>Congrats blah blah</p>
          <p>Congrats blah blah</p>
          <p>Congrats blah blah</p>
          <img src='./medal (1).png' alt='steps' />
          <img src='./medal (2).png' alt='steps' />
          <img src='./medal.png' alt='steps' />
        </div>
      </div>
    </div>
  );
}

export default DailyProgress;
