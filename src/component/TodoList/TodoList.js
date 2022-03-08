import React  from 'react';
import './TodoList.scss';
import TodoItem from "../TodoItem/TodoItem";
import { useSelector} from "react-redux";
const TodoList = () => {
    const todos = useSelector((state => state.todos));
    const filterValue = useSelector((state => state.filter));

    return (
        <>
            { todos.length > 0 ?
                <ul className="TodoList">
                    {
                        todos.filter(item => filterValue === null ? item.completed !== filterValue : item.completed === filterValue).map((todo)=> {
                            return  <TodoItem
                                key={todo.id}
                                title={todo.title}
                                id={todo.id}
                                description={todo.description}
                                completed={todo.completed}
                            />
                        })
                    }
                </ul>
                :<h2 className="NotDataTitle">Add todo your list</h2>
            }
        </>

    );
};

export default TodoList;