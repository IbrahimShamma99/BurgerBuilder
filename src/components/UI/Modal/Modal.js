import React , {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps,nextState){
        console.log("[Modal] shouldComponentUpdate");
        return nextProps.show !== this.props.show;
    };    
    render(){
    return ( 
        <Aux>
        <Backdrop click={this.props.modalClosed}
            show={this.props.show}/>
        <div style={{transform:
        this.props.show ? "translateY(0)" :"translateY(-100vh)",
        opacity:this.props.show ? '1' : '0'
        }}
        className = { classes.Modal } >
         { this.props.children }
         </div>
         </Aux>
    )
}
};

export default Modal;