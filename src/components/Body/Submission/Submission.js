import React from 'react';
import classes from './Submission.css';

const submission = (props) =>{
    let warn =  <h3>Please fill up the forms before submmiting.</h3>;

    return(
        <div className = {classes.Submission}>
            <h4>{props.prediction ?  props.prediction : null}</h4>
            {props.prediction? null : warn}
            <button className = {classes.myButton} onClick = {props.clicked}>Submit</button>
        </div>
    );
}

export default submission;