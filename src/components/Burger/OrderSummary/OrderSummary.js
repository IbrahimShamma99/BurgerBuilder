import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const Ingradient = props.ingradients;
    
    var ingradientSummary = Object.keys(Ingradient).map((key)=> {
    return( <li key={key}><span style={{textTransform:"capitalize"}}>
        {key}</span>={Ingradient[key]} </li>);
    });
    return(
        <Aux>
            <h1>Your order</h1>
            <p>Delicious order with the following:</p>
            <ul>
                {ingradientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
};
export default orderSummary;