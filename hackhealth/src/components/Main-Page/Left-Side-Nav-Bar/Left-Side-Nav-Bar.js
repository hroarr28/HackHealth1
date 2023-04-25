import React from 'react';
import './Left-Side-Nav-Bar.css';

function DayButtons() {
    console.log('button clicked!')
    
    function Button(props) {
        return (
            <button onClick={props.onClick}>
                {props.label}
            </button>);
    };
    
    return (
        <div className='nav-container'>
        <div className='buttons'>
            <Button onClick={DayButtons} label="M"/>
            <Button onClick={DayButtons} label="T"/>
            <Button onClick={DayButtons} label="W"/>
            <Button onClick={DayButtons} label="T"/>
            <Button onClick={DayButtons} label="F"/>
            <Button onClick={DayButtons} label="S"/>
            <Button onClick={DayButtons} label="S"/>
            </div>
        </div>
    );
};

export default DayButtons;