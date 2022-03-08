import {createSlice} from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name:'modal',
    initialState: {
        isOpen : false,
        action : {}
    },
    reducers:{
        openModal(state,action) {
            state.isOpen = true
            state.action = {...action.payload}
        },
        closeModal(state,action) {
            state.isOpen = false
            state.action = {}
        }
    }
})

export const {openModal,closeModal} = modalSlice.actions;

export default modalSlice.reducer;