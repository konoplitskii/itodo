import {createSlice} from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name:'filter',
    initialState: null,
    reducers:{
        filterTodo(state,action) {
            console.log(state)
            switch (action.payload) {
                case 'Completed':
                    return state = true
                case 'Incomplete':
                    return state = false
                default:
                    return state = null
            }
        }
    }
})

export const {filterTodo} = filterSlice.actions;

export default filterSlice.reducer;