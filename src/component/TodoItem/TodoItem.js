import React, {memo} from 'react';
import './TodoItem.scss';
import Checkbox from "../../ui/Checkbox/Checkbox";
import ButtonAction from "../../ui/ButtonAction/ButtonAction";
import DeleteIcon from "../../ui/Icons/DeleteIcon";
import EditIcon from "../../ui/Icons/EditIcon";
import GroupActionButton from "../../ui/GroupActionButton/GroupActionButton";
import {useDispatch} from "react-redux";
import {checkTodo, removeTodo} from "../../store/slice/todoSlice";
import {openModal} from "../../store/slice/modalSlice";
import {Link} from "react-router-dom";

const TodoItem = ({title, description, completed,id}) => {

    const dispatch = useDispatch();

    return (
       <li className="TodoItem">
           <Checkbox checked={completed} checkAction={()=> dispatch(checkTodo(id))}/>
           <Link to={`/todo/${id}`} className="TodoLink">{title}</Link>
           <GroupActionButton>
               <ButtonAction
                   icon={<DeleteIcon/>}
                   onClick={()=> dispatch(removeTodo(id))}
               />
               <ButtonAction
                   icon={<EditIcon/>}
                   onClick={()=>dispatch(openModal({type:'updateTodo',payload:{title,description,completed,id}}))}
               />
           </GroupActionButton>
       </li>
    );
};

export default memo(TodoItem);