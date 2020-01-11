import React from 'react';
import classes from './BuildControl.css';
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            onClick = {props.add}
            className={classes.More}>MORE</button>
        <button 
            className={classes.Less}  
            onClick = {props.remove}
        >LESS</button>
    </div>
);


export default buildControl ;