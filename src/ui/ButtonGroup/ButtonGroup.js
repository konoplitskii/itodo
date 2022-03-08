import React from 'react';
import Button from "../Button/Button";
import './ButtonGroup.scss';

const ButtonGroup = ({accept, cancel}) => {
    return (
         <div className="ButtonGroup">
            <Button text="Save" onClick={accept} variant="primary"/>
            <Button text="Close" onClick={cancel} variant="secondary"/>
        </div>
    );
};

export default ButtonGroup;