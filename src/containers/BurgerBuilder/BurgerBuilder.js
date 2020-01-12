import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import IngradientPrices from '../../constants/constants';

class BurgerBuilder extends Component {

    state = {
        ingradients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        totalPrice:4,
    };
    updateIndradientList = function(type , operation) {        
        const oldCount = this.state.ingradients[type];
        var updatedCount = null;
        if (operation==="ADD"){updatedCount = oldCount +1 ;}
        else if (operation==="REM"){
            if (oldCount === 0){return {...this.state.ingradients}}
            updatedCount = oldCount -1;};

        const updatedIngradients = {...this.state.ingradients};
        updatedIngradients[type]=updatedCount;
        return updatedIngradients ;
    };
    updatePrice = (type , operation) => {
        const oldPrice = this.state.totalPrice;
        const valueAdded = IngradientPrices[type];
        var newPrice = null;
        if (operation==="ADD"){
            newPrice = oldPrice + valueAdded;
        }
        else if(operation === "REM") {
            if (oldPrice === 4){return {...this.state.totalPrice};};

             newPrice = oldPrice - valueAdded;
        };
        return newPrice ;
    };
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
            <BuildControls
              add = {this.addIngradientHandler}
              remove={this.removeIngradientHandler}
              price={this.state.totalPrice}
              />
            </Aux>
        );
    }

};


export default BurgerBuilder;