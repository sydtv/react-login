import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div><Logo alt='Logo BurgerBuilder'/></div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;