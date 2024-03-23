import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import  AuthorReducer  from "../slice/authorSlice";
import categoriReducer from "../slice/categorySlice";
import bookingsReducer from "../slice/bookingSlice";
import bookReducer from "../slice/bookSlice";
export const store = configureStore({
    reducer:{
        authors: AuthorReducer,
        categorie: categoriReducer,
        bookings: bookingsReducer,
        libri: bookReducer,

    } 
        
})