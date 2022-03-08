import React, {useState} from 'react';
import Button from "../../ui/Button/Button";
import Select from "../../ui/Select/Select";
import './Header.scss';
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../store/slice/modalSlice";
import {addTodo} from "../../store/slice/todoSlice";
import {filterTodo} from "../../store/slice/filterSlice";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <header className="Header">
            <Button text="Add Todo" onClick={()=>dispatch(openModal({type:'addTodo'}))}/>
            <Select size="small" onCallBackChange={(value)=> dispatch(filterTodo(value))}/>
        </header>
    );
};

export default Header;