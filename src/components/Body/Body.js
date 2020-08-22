import React from 'react';
import classes from './Body.css';
import Inputs from './Inputs/Inputs';
import Submission from './Submission/Submission'
import HiddenBtn from './HiddenBtn/HiddenBtn';

const body = (props) =>{

    // const forms = props.keys.map(feat =>{
    //     <input type = 'text' name = {feat} key = {feat} />
    // })
    return(
        <React.Fragment>

            <div className = {classes.Body}>
                <form className = {classes.Form}>
                    <Inputs 
                    keys = {props.keys} 
                    changed = {props.changed}
                    showInfo = {props.showAttributes}/>
                    <Submission 
                    clicked = {props.clicked} 
                    disabled = {props.disabled}/>
                </form>
                <HiddenBtn 
                clicked = {props.clicked} 
                disabled = {props.disabled}/>
            </div>
        </React.Fragment>
    );
}

export default body; 