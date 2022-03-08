import React from 'react';
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import Modal from "../../ui/Modal/Modal";

const Main = () => {
    return (
        <div>
            <h1 className="title">TODO</h1>
            <Header/>
            <TodoList/>
            <Modal/>
        </div>
    );
};

export default Main;