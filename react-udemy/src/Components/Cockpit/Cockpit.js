import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    return (
          <div className={classes.Cockpit}>
              <h1>Hello</h1>
              <button onClick={props.click}>Switch Name</button>
              <p>{props.otherState}</p>
          </div>
    )
};


export default cockpit;
