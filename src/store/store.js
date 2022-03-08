import {configureStore} from "@reduxjs/toolkit";
import {modalSlice} from "./slice/modalSlice";
import {todoSlice} from "./slice/todoSlice";
import {filterSlice} from "./slice/filterSlice";




export const store = configureStore({
    reducer: {
        modal:modalSlice.reducer,
        todos:todoSlice.reducer,
        filter:filterSlice.reducer,
    }
})