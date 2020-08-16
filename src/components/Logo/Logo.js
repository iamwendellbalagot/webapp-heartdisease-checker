import React from 'react';
import icon from '../../assets/logo2.png';
import classes from './Logo.css';

const logo = (props) =>(
    <div className = {classes.Logo}>
        <img src = {icon} alt='logo'/>
    </div>
);

export default logo;

