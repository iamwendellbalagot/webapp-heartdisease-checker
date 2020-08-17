import React from 'react';
import classes from './Result.css';
import logoImage from '../../../assets/logo2.png';
import Spinner from '../../Spinner/Spinner';

const result = (props) =>{

    let prediction = null;
    if(props.prediction ==="You don't have a heart disease."){
        prediction = <h4 style={{ color:'#639a67'}}>{props.prediction}</h4>;
    }
    else{
        prediction = <h4 style={{ color: '#c53838' }}>{props.prediction}</h4>;
    }

    return (
        props.showSpinner?<div><Spinner /><p className = {classes.wait}>Please wait...</p></div>
        :<div className = {classes.Result}>
            <img src = {logoImage} alt = 'logoModal'/>
            {prediction}
            <p>Probability: {props.probability + '%'} </p>
        </div>
    );
}

//639a67
//c53838

export default result;