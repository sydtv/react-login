import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {

    useEffect(() => {
       console.log('[Cockpit.js] useEffect');
       return (
           console.log('hello')
       )
    }, []);

    return (
          <div className={classes.Cockpit}>
              <h1>Hello</h1>
              <button onClick={props.click}>Switch Name</button>
              <p>{props.otherState}</p>
          </div>
    )
};


export default React.memo(cockpit);
