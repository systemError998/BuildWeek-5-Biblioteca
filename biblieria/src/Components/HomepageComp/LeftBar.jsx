import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorie } from '../../slice/categorySlice.js';
import "../../assets/css/Categories.css"
import "../../assets/script/Anna.js"

import LeftBarList from './LeftBarList.jsx';

export default function LeftBar() {

    const dispatch = useDispatch()

    const category= useSelector(state=>state.categorie.listaCategorie)

    useEffect(()=>{
        dispatch(getCategorie())
    },[])
    
    useEffect(()=>{
        console.log(category)
    },[category]) 

return (
    <>
        <div className="navigation mt-4 rounded-md">
            <p className='uppercase font-sans font-semibold border-b-2 pb-2'> Categorie </p>
            <ul className="uppercase font-sans font-semibold text-center">
                { category.map((categoria, index) => (
                    <LeftBarList key={index} categoria={categoria} />
                ))}
            </ul>
        </div>
    </>
)
}

