import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price: {props.price}</p>
        {controls.map(ctrl => (
            <BuildControl removed={() => props.ingredientRemoved(ctrl.type)} added={() => props.ingredientAdded(ctrl.type)} key={ctrl.label} label={ctrl.label}/>
        ))}
        <button disabled={!props.purchasable} onClick={() => props.ordered()} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;