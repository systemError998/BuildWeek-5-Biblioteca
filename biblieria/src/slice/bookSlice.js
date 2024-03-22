import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "../api/axios";

const initialState = {
        listaLibro: [],
        loading: null,
        error: "",
        libroSelezionato: {},
        categoriaSelezionata: null,
        pagineTotali: 1,
        paginaCorrente: 1,
        risultatiTotali:0,
};
export const getAllBooks = createAsyncThunk("getAllBooks/fetch", async (args = [null, 1, ""], { dispatch }) => {
    return axios(url + postUrl + (args[0] ? (`&categories=` + args[0]) : "") +
        (args[1] ? ("&page=" + args[1]) : "") + (args[2] ? ("&search=" + args[2]) : ""))
        .then(response => {
            if (args[1]) {
                dispatch(setPaginaCorrenteBooks(args[1]));
            } else {
                dispatch(setPaginaCorrenteBooks(1));
            }

            return [response.data, response.headers["x-wp-totalpages"]]
        })
});

const chiamataBooks_slice = createSlice(
    {
        name: 'libri',
        initialState: initialState,
        reducers: create => ({
            selezionaCategoria: create.reducer((state, action) => {
                state.posts.categoriaSelezionata = action.payload;
            }),
            selezionaLibro: create.reducer((state, action) => {
                state.posts.postSelezionato = action.payload;
            }),
            setPaginaCorrenteBooks: create.reducer((state, action) => {
                state.posts.paginaCorrente = action.payload;
            }),
        }),
        extraReducers: builder => {
            builder
                .addCase(getAllBooks.pending, (state, action) => {
                    state.posts.loading = true;
                
                    state.posts.error = "";
                })
                .addCase(getAllBooks.rejected, (state, action) => {
                    state.posts.loading = false
                    
                    state.posts.error = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getAllBooks.fulfilled, (state, action) => {
                    state.posts.loading = false;
                    state.posts.listaLibro = action.payload[0];
                    state.posts.pagineTotali = action.payload[1];
                    state.posts.error = "";
                })
        }
    }
)
const { reducer, actions } = chiamataBooks_slice;
export const { selezionaCategoria, selezionaLibro, setPaginaCorrenteBooks } = actions;
export default reducer;