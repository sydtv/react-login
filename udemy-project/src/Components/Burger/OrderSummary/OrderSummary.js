import React from 'react';
import Auxil from '../../../hoc/Auxiliary';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return  <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
    });

    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Price: {props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={() => props.cancel()}>CANCEL</Button>
            <Button btnType='Success' clicked={() => props.continue()}>CONTINUE</Button>
        </Auxil>
    )
};

export default orderSummary;