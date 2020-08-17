import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
const toolbar =(props) =>(
    <React.Fragment>
    <ul className = {classes.Toolbar}>
        <Logo />
        <li><a target = '_blank' href = {'https://github.com/iamwendellbalagot'}>Developer</a></li>
        <li><NavLink to= {{
            pathname: '/about',
            hash:'submit',
            search: 'quick-submit=true?'
        }} >About</NavLink></li>
        <li><NavLink to= '/' activeClassName = 'active'>Home</NavLink></li>
    </ul>
    </React.Fragment>
);

export default toolbar;