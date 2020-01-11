import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
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
            <BuildControls/>
            </Aux>
        );
    }

};


export default BurgerBuilder;