import React, {useEffect, useRef, useState} from 'react';
import './Select.scss';
import SelectItem from "./SelectItem";
import ArrowDown from "../Icons/ArrowDown";
import useOutsideClick from "../../utils/useOutsideClick";

const Select = ({size,onCallBackChange}) => {

    const [isActive, setActive] = useState(false);
    const [value, setValue] = useState('Make your choice');

    const selectBox = useRef(null);


    const onOrder = (e) => {
        onCallBackChange(e.target.textContent);
        setValue(e.target.textContent);
        hideSelect();
    }

    const hideSelect = () => {
        setActive(false)
    }

    useOutsideClick(selectBox,hideSelect);

    return (
        <div className={`SelectBox SelectBox__${size}`} ref={selectBox}>
            <div className="SelectValue" onClick={e => setActive(!isActive)}>
                <span className="SelectValueText">{value}</span>
                <ArrowDown/>
            </div>
            {isActive &&
                <ul className="Select">
                    <SelectItem value="All" onClick={onOrder}/>
                    <SelectItem value="Completed" onClick={onOrder}/>
                    <SelectItem value="Incomplete" onClick={onOrder}/>
                </ul>
            }
        </div>
    );
};

export default Select;