import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const IngradientPrices = {
    salad:0.5,
    cheese:0.4,
    bacon:0.7,
    meat:1.3
};

class BurgerBuilder extends Component {

    state = {
        ingradients:{
            salad:1,
            cheese:2,
            meat:2,
            bacon:3
        },
        totalPrice:4
    };
    updateIndradientList = function(type , operation) {        
        const oldCount = this.state.ingradients[type];
        var updatedCount = null;
        if (operation==="ADD"){updatedCount = oldCount +1 ;}
        else if (operation==="REM"){updatedCount = oldCount -1;};
        const updatedIngradients = {...this.state.ingradients};
        updatedIngradients[type]=updatedCount;
        return updatedIngradients ;
    };
    updatePrice = function(type , operation) {
        const oldPrice = this.state.totalPrice;
        const valueAdded = IngradientPrices[type];
        var newPrice = null ;
        if (operation==="ADD"){
            newPrice = oldPrice + valueAdded;}
        else if(operation === "REM") {
             newPrice = oldPrice - valueAdded;
        }
        return newPrice ;

    }

    addIngradientHandler = (type) => {
        const updatedIngradients = this.updateIndradientList(type,"ADD");
        const newPrice =this.updatePrice(type,"ADD");
        this.setState({ingradients:updatedIngradients,totalPrice:newPrice});

    };

    removeIngradientHandler = (type) => {
        const updatedIngradients = this.updateIndradientList(type,"REM");
        const newPrice =this.updatePrice(type,"REM");
        this.setState({ingradients:updatedIngradients,totalPrice:newPrice});

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