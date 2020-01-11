import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label:'Salad',type:"salad"
    },
    {
        label:'Bacon',type:"bacon"
    },
    {
        label:'Meat',type:"meat"
    },
    {
        label:'Cheese',type:"cheese"
    }
];

const buildControl = (props) => ( 
    <div 
    className={classes.BuildControls}> 
    {controls.map((control)=>
     <BuildControl 
     label={control.label} 
     key={control.label}
     type={control.type} 
     add = {()=>props.add(control.type)} 
     remove = {()=>props.remove(control.type)}/>
    )
    }
    </div>
)


export default buildControl;