import React, {useState} from 'react';
import './Checkbox.scss';
const Checkbox = ({checked,checkAction}) => {
    return (
        <label className="Checkbox">
            <input className="CheckboxField" type="checkbox" onChange={()=> checkAction()} checked={checked}/>
            <span className="CheckboxVisual"></span>
        </label>
    );
};

export default Checkbox;