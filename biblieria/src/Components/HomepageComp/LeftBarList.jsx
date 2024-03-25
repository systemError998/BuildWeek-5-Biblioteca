import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';
import "../../assets/css/Categories.css"
import { selezionaCategoria } from '../../slice/bookSlice';

export default function LeftBarList( {categoria} ) {

    const dispatch = useDispatch()

    const categoriaSelezionata = useSelector(state => state.libri.categoriaSelezionata);
    useEffect(()=>{
        console.log((categoriaSelezionata == categoria.id));
    },[categoriaSelezionata])

    return (
        <>
           
            <li className={"list text-center "+ (categoriaSelezionata == categoria.id ? 'active' : '')}  key={categoria.id} >
                <button className="flex gap-1 no-underline uppercase "  onClick={() => { dispatch(getAllBooks({category_id: categoria.id})); dispatch(selezionaCategoria(categoria.id)) }}>
                    <span className="iconcina w-7 sm:mx-2 mx-3 inline">
                    </span>
                    <span className="testoSide"> {categoria.name} </span>
                </button>
            </li>
        </>
    )
}
