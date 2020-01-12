import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingradientSummary = props.ingradients;
    (ingradientSummary)
    return(
        <Aux>
            <h1>Your order</h1>
            <p>Delicious order with the following:</p>
            <ul>
                
            </ul>
        </Aux>
    )
};
export default orderSummary;