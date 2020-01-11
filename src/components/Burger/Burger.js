import React from 'react';
import classes from './Burger.css';
import BurgerIngradients from './BurgerIngradient/BurgerIngradient';

const burger = (props) => {
    var transformedIngradients = Object.keys(props.ingradients)
    .map((igKey)=> {
        return [...Array(props.ingradients[igKey])].map((_,i)=> {
            return <BurgerIngradients key={igKey+i} type={igKey}/> ;
        });
    }).reduce((arr , el)=>{
        return arr.concat(el);
    },[]);
    
    if (transformedIngradients.length === 0){
        transformedIngradients = <p>Please add up ingradients</p> ;
    };
    return (
        <div className={classes.Burger}>
            <BurgerIngradients type="bread-top"/>
            {transformedIngradients}
            <BurgerIngradients type="bread-buttom"/>
        </div>
    );
};

export default burger;