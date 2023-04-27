import React from "react";
import "./Left-Side-Nav-Bar.css";
import { useState } from "react";

function DayButtons(props) {
  return (
<<<<<<< HEAD
    <div className="nav-container">
      <div className="buttons">
        <img
          src="https://i.ibb.co/nfd809h/Hack-11.png"
          alt="footprint-logo"
          className="foot-logo"
        />
=======
    <div className='nav-container'>
      <img src="https://i.ibb.co/nfd809h/Hack-11.png" alt="footprint-logo" className='foot-logo' />
      <div className='buttons'>
        
>>>>>>> f2d333e75983cd97552af55dfe2caebabcfe0767
        <props.Button label="M" day={1} />
        <props.Button label="T" day={2} />
        <props.Button label="W" day={3} />
        <props.Button label="T" day={4} />
        <props.Button label="F" day={5} />
        <props.Button label="S" day={6} />
        <props.Button label="S" day={0} />
      </div>
    </div>
  );
}

export default DayButtons;
