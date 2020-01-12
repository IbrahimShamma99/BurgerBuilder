import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
const modal = (props) => {
    return ( 
        <Aux>
        <Backdrop click={props.modalClosed}
            show={props.show}/>
        <div style={{transform:
        props.show ? "translateY(0)" :"translateY(-100vh)",
        opacity:props.show ? '1' : '0'
        }}
        className = { classes.Modal } >
         { props.children }
         </div>
         </Aux>
    )
};
export default modal;