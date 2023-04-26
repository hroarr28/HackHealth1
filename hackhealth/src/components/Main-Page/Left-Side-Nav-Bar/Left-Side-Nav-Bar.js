import React from 'react';
import './Left-Side-Nav-Bar.css';
import { useState } from 'react';

function DayButtons(props) {


  return (
    <div className='nav-container'>
      <div className='buttons'>
      <props.Button label="M" day={1} />
        <props.Button label="T" day={2} />
        <props.Button label="W" day={3} />
        <props.Button label="T" day={4} />
        <props.Button label="F" day={5} />
        <props.Button label="S" day={6} />
        <props.Button label="S" day={7} />
      </div>

    </div>
  );
};

export default DayButtons;
