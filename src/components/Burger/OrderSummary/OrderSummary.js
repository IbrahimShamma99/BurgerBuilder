import React , {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log("[OrderSummary] componentWillUpdate");
    };

    render(){
        const Ingradient = this.props.ingradients;
    
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
            <p>Total Price is : {this.props.price}</p>
            <p>Continue to Checkout?</p>
            <Button clicked={this.props.cancel} 
            theme="Danger">CANCEL</Button>
            <Button clicked={this.props.continue}
            theme="Success">CONTINUE</Button>
        </Aux>
    )};
};
export default OrderSummary;