import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
const layout = (props) => (
    <Aux>
    <div className={classes.content}>Toolbar ,SideDrawer , Backdrop</div>
    <main>
        {props.children}
    </main>
    </Aux>
    );

export default layout ;