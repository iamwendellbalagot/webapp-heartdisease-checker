import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
const toolbar =(props) =>(
    <React.Fragment>
    <ul className = {classes.Toolbar}>
        <Logo />
        <li><NavLink to= '/'  activeClassName = 'active'>Developer</NavLink></li>
        <li><NavLink to= '/' activeClassName = 'active'>About</NavLink></li>
        <li><NavLink to= '/' activeClassName = 'active'>Home</NavLink></li>
    </ul>
    </React.Fragment>
);

export default toolbar;