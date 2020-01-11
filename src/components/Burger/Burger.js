import React from 'react';
import classes from './Burger.css';
import BurgerIngradients from './BurgerIngradient/BurgerIngradient';


const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngradients type="bread-top"/>
            <BurgerIngradients type="cheese"/>
            <BurgerIngradients type="meat"/>
            <BurgerIngradients type="bread-buttom"/>
        </div>
    );
};

export default burger;