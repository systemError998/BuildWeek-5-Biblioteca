import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const endPointBooking="/api/booking"

const initialState={
    listaBooking:[],
    selectedBooking:{},
    error:"",
    loading: false
}

//primo parametro nome azione/ oprerazione che vuoi eseguire fetch, parametro 2 operazione async

export const getBookings =
    createAsyncThunk("Bookings/fetch", async()=>{
       return axios.get(endPointBooking).then(response=> {console.log(response);return response.data}).catch(error=>console.log(error));
    })


export const booking_slice = createSlice(
    {
        name: "bookings",
        initialState: initialState,
        reducers:{
            
        },
        extraReducers: (builder)=> {
            builder
                .addCase(getBookings.pending,(state,action)=>{
                    state.loading=true
                })
                .addCase(getBookings.rejected,(state,action)=>{
                    state.error=action.error.message
                    state.loading=false
                })
                .addCase(getBookings.fulfilled,(state,action)=>{
                    state.listaBooking=action.payload
                    state.loading=false
        })
    }
})

const {reducer,actions}= booking_slice;
export default reducer