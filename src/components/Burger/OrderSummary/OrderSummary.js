import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
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
            <p>Total Price is : {props.price}</p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancel} 
            theme="Danger">CANCEL</Button>
            <Button clicked={props.continue}
            theme="Success">CONTINUE</Button>
        </Aux>
    )
};
export default orderSummary;