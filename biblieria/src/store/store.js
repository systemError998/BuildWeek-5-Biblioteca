import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import  AuthorReducer  from "../slice/authorSlice";
import categoriReducer from "../slice/categorySlice"


export const store = configureStore({
    reducer:{
        authors: AuthorReducer,
        categorie: categoriReducer
    } 
        
})