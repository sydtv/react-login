import React from 'react';
import './Clearbutton.css';

const clearbutton = (props) => (
  <div className="clear-button" onClick={props.handleClear}>
      {props.children}
  </div>
);

export default clearbutton;