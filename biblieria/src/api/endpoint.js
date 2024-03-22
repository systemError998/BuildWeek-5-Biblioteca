import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "../api/axios";

const initialState = {
    listaAutori: [],
    loading: null,
    error: "",
};

export const getAutori = createAsyncThunk("GetAutori/fetch", async () => {
    return axios("/api/author")
            .then(response => response.data);
})

const Autori_slice = createSlice(
    {
        name: 'Autori',
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getAutori.pending, (state, action) => {
                state.loading = true;
            })
                .addCase(getAutori.rejected, (state, action) => {
                    state.loading = false
                    state.error = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getAutori.fulfilled, (state, action) => {
                    state.loading = false;
                    state.Autori = action.payload;                                     
                })
        }
    }
);
const { reducer, actions } = Autori_slice;

export default reducer;