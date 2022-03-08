import React from 'react';
import './ButtonAction.scss';

const ButtonAction = ({icon,onClick}) => {
    return (
        <button className="ButtonAction" onClick={onClick}>{icon}</button>
    );
};

export default ButtonAction;