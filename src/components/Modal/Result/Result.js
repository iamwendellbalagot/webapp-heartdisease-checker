import React from 'react';
import classes from './Result.css';

const result = (props) =>{
    return (
        <div className = {classes.Result}>
            <p>{props.prediction}</p>
            <p>Probability: {props.probability + '%'} </p>
        </div>
    );
}

export default result;