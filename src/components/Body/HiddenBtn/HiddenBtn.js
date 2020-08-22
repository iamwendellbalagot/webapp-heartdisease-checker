import React from 'react';
import classes from './HiddenBtn.css';

const HiddenBtn = (props) => {
    let enabledButton = <button disabled = {false} className = {classes.myButton} onClick = {props.clicked}>Submit</button>
    let disabledButton = <button disabled = {true} className = {classes.disabled} onClick = {props.clicked}>Submit</button>

    return (
        <div className={classes.Container}>
            {props.disabled? enabledButton : disabledButton}
            {/* {enabledButton} */}
        </div>
    );
};

export default HiddenBtn;