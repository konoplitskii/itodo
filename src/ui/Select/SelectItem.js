import React from 'react';
import './SelectItem.scss'

const SelectItem = ({value,onClick}) => {
    return (
        <li className="SelectItem" onClick={(e)=>onClick(e)}>{value}</li>
    );
};

export default SelectItem;