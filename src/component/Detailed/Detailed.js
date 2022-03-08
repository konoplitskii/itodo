import React, {useEffect} from 'react';
import './Detailed.scss';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const Detailed = () => {
    const params = useParams();
    const todos = useSelector((state => state.todos));
    const todo = todos.filter(item=> item.id === params.id);

    const {title,description} = todo[0];


    return (
        <div>
            <h1>{title}</h1>
            <div>{description}</div>
        </div>
    );
};

export default Detailed;