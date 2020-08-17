import React from 'react';
import classes from './Submission.css';
import heart from '../../../assets/heart.gif';

const submission = (props) =>{
    let warn =  <p className = {classes.warn}>Please fill up the form before submmiting.</p>;
    let submit = <p className = {classes.warn}>Click submit to get a result.</p>;
    let enabledButton = <button disabled = {false} className = {classes.myButton} onClick = {props.clicked}>Submit</button>
    let disabledButton = <button disabled = {true} className = {classes.disabled} onClick = {props.clicked}>Submit</button>

    return(
        <div className = {classes.Submission}>
            <div className = {classes.gif}>
            < iframe src = {heart} scrolling = 'no' title='gif'/>
            </div> 
            {props.disabled? submit : warn}
            {props.disabled? enabledButton : disabledButton}
        </div>
    );
}

export default submission;