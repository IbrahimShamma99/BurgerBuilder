import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import IngradientPrices from '../../constants/constants';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    state = {
        ingradients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        totalPrice:4,
        purchasable:false,
    };

    updatePurchase = ()=> {
        const ingradients = {...this.state.ingradients};
        var sum = 0 ;
        //NOTE Outputs salad cheese meat bacon
        Object.keys(ingradients)
        .map((key)=>{
            let element=ingradients[key];//NOTE Ex:ingradients["salad"]=(5)
            sum +=element;
            return element
        });

        if (sum ===0){this.setState({purchasable:false})}
        else{this.setState({purchasable:true})};
    };
    
    updateIndradientList = (type , operation)=> {        
        const oldCount = this.state.ingradients[type];
        var updatedCount = null;
        if (operation==="ADD"){updatedCount = oldCount +1 ;}
        else if (operation==="REM"){
            if (oldCount === 0){return this.state.ingradients}
            updatedCount = oldCount -1;
        };
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
            const oldCount = this.state.ingradients[type];
            if (oldPrice === 4 || oldCount ===0){return {...this.state.totalPrice};};

             newPrice = oldPrice - valueAdded;
        };

        if (newPrice < 4 ){
         newPrice = 4 ;
        } 
        else{          
        return newPrice ;
        }
        return newPrice ;
    };

    addIngradientHandler = (type) => {
        const updatedIngradients = this.updateIndradientList(type,"ADD");
        const newPrice =this.updatePrice(type,"ADD");
        this.setState({ingradients:updatedIngradients,totalPrice:newPrice});
        this.updatePurchase();
    };

    removeIngradientHandler = (type) => {
        const updatedIngradients = this.updateIndradientList(type,"REM");
        const newPrice =this.updatePrice(type,"REM");
        this.setState({ingradients:updatedIngradients,totalPrice:newPrice});
        this.updatePurchase();
    };
    
    render(){
        return (
            <Aux>
            <Modal>
                <OrderSummary ingradients={this.state.ingradients}/>
            </Modal>
            <Burger ingradients={this.state.ingradients} />
            <BuildControls
              add = {this.addIngradientHandler}
              remove={this.removeIngradientHandler}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              />
            </Aux>
        );
    }
};

export default BurgerBuilder;