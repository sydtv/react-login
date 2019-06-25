import React from 'react';
import Auxil from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxil>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxil>
);

export default layout;