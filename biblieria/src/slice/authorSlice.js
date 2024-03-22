import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const endPointAuthors="/api/author"

const initialState={
    listaAuthors:[],
    selectedAuthor:{},
    error:"",
    loading: false
}

//primo parametro nome azione/ oprerazione che vuoi eseguire fetch, parametro 2 operazione async

export const fetchAuthors =
    createAsyncThunk("Authors/fetch", async()=>{
       return axios.get("/api/author?&page=2").then(response=> {console.log(response);return response.data}).catch(error=>console.log(error));
    })


export const AuthorSlice = createSlice(
    {
        name: "authors",
        initialState: initialState,
        reducers:{
            
        },
        extraReducers: (builder)=> {
            builder
                .addCase(fetchAuthors.pending,(state,action)=>{
                    state.loading=true
                })
                .addCase(fetchAuthors.rejected,(state,action)=>{
                    state.error=action.error.message
                    state.loading=false
                })
                .addCase(fetchAuthors.fulfilled,(state,action)=>{
                    state.authors=action.payload
                    state.loading=false
        })
    }
})

const {reducer,actions}=AuthorSlice;
export default reducer