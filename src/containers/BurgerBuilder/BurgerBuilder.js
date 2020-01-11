import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingradients:{
            salad:1,
            cheese:2,
            meat:2,
            bacon:3
        }
    };

    render() {
        return ( 
            <Aux>
            <Burger ingradients={this.state.ingradients} />
            <div>Burger controls</div>
            </Aux>
        );
    }

};


export default BurgerBuilder;