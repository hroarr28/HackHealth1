import React from "react";
import "./Left-Side-Nav-Bar.css";
import {useState} from "react";

function DayButtons(props) {
  return (
    <div className='nav-container'>
      <img
        src='https://i.ibb.co/nfd809h/Hack-11.png'
        alt='footprint-logo'
        className='foot-logo'
      />
      <div className='week-buttons'>
        <button>M</button>
        <button>T</button>
        <button>W</button>
        <button>T</button>
        <button>F</button>
        <button>S</button>
        <button>S</button>
      </div>
    </div>
  );
}

export default DayButtons;
