import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorie } from '../../slice/categorySlice';
import "../../assets/css/Categories.css"
import "../../assets/script/Anna.js"

export default function CategoriesList() {

    const array = [
        'categ',
        'categoria',
        'categoria',
        'categoria',
        'categoria',
        'categoria',
        'categoria',
        'categoria'
    ]

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
        <div className="navigation h-100">
            <p className='uppercase font-sans font-semibold border-b-2 pb-2'> Categorie </p>
            <ul className="uppercase font-sans font-semibold text-center">
                { category.map((categoria, index) => (
                <li className="list text-center" key={index}>
                    <button className="flex gap-1 no-underline uppercase" href="#">
                        <span className="iconcina w-7 sm:mx-2 mx-4 inline"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </span>
                        <span  className="testoSide"> {categoria.name}</span>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </>
)
}

