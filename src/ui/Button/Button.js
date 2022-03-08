import React from 'react';
import './Button.scss';

const Button = ({variant,text='button',onClick}) => {
    return (
        <button
            className={`Button ${variant === 'secondary' ? 'secondaryButton' : 'primaryButton'}`}
            onClick={onClick}
        >{text}</button>
    );
};

export default Button;