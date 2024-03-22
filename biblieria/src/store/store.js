import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import  AuthorReducer  from "../slice/authorSlice";



export const store = configureStore({
    reducer:{
        authors: AuthorReducer
    } 
        
})