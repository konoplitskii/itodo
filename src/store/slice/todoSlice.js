import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todos',
    initialState: localStorage.getItem('todos')
        ?  [...(JSON.parse(localStorage.getItem('todos')))]
        : [],
    reducers:{
        addTodo(state,action){
            state.push(action.payload);
            localStorage.setItem('todos',JSON.stringify(state))
        },
        removeTodo(state,action){
            localStorage.setItem('todos',JSON.stringify(state.filter(item => item.id !== action.payload)))
            return state.filter(item => item.id !== action.payload)
        },
        checkTodo(state,action){
            const itemTodo = state.find(item => item.id === action.payload);
            itemTodo.completed = !itemTodo.completed;
            localStorage.setItem('todos',JSON.stringify(state))
        },
        getTodoById(state,action){
           return  state.filter(item => item.id === action.payload.id)
        },
        updateTodo(state,action) {
            let itemTodo = state.find(item => item.id === action.payload.id);
            itemTodo.title = action.payload.data.title ? action.payload.data.title : itemTodo.title;
            itemTodo.description = action.payload.data.description ? action.payload.data.description : itemTodo.description;
            localStorage.setItem('todos',JSON.stringify(state))
        },
    }
})

export const {addTodo,removeTodo,checkTodo,updateTodo,getTodoById} = todoSlice.actions;

export default todoSlice.reducer;