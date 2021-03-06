import React from 'react';

import Auxil from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal = (props) => (
    <Auxil>
        <Backdrop show={props.show} clicked={() => props.modalClosed()}/>
        <div className={classes.Modal}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>

            {props.children}
        </div>
    </Auxil>
);

export default modal;