import React from 'react';
import LogoPicture from "../../assets/Images/27.1 burger-logo.png.png";
import classes from './Logo.css';
const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img alt="LOGO" src={LogoPicture} />
        </div>
    );
};

export default logo;