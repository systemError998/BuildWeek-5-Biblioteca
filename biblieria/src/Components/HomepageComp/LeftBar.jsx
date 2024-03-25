import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { getCategorie } from '../../slice/categorySlice.js';
import "../../assets/css/Categories.css"
import "../../assets/script/Anna.js"
import { selezionaCategoria } from '../../slice/bookSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';

import LeftBarList from './LeftBarList.jsx';

export default function LeftBar() {

    const dispatch = useDispatch()

    const category= useSelector(state=>state.categorie.listaCategorie)
    const categoriaSelezionata = useSelector(state => state.libri.categoriaSelezionata)

    useEffect(()=>{
        dispatch(getCategorie())
    },[])
    
    useEffect(()=>{
        console.log(categoriaSelezionata)
    },[categoriaSelezionata]) 

return (
    <>
        <div className="navigation mt-4 rounded-md">
            <p className='uppercase font-sans font-semibold border-b-2 pb-2'> Categorie </p>
            <ul className="uppercase font-sans font-semibold text-center">
            <li className={"list text-center " + (!categoriaSelezionata ? 'active' : '')} >
                <button className="flex gap-1 no-underline uppercase "  onClick={() => { dispatch(getAllBooks()); dispatch(selezionaCategoria(null)) }}>
                    <span className="iconcina w-7 sm:mx-2 mx-3 inline">
                    </span>
                    <span className="testoSide"> QUALSIASI </span>
                </button>
            </li>
                { category.map((categoria, index) => (
                    <LeftBarList key={index} categoria={categoria} />
                ))}
            </ul>
        </div>
    </>
)
}

