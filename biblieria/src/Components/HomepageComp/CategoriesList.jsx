import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorie } from '../../slice/categorySlice';
import "../../assets/css/Categories.css"

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
    <div className='container bg-slate-900 rounded-md py-2.5'>
    <div className="row mx-1 justify-center mb-2">
                    <button className="btn btn-blue my-2.5 w-44 labelPreferiti">
                    <img src="https://freesvg.org/img/Buecher-coloured.png" alt="metamask" class="w-6 h-6" />                <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-default'>CATEGORIE</Link>
                    </button>
                </div>
        {category.map((categoria)=>(
            <div className='row mx-1 justify-center' key={categoria.id}>
            <button class="btn btn-blue my-2.5">
        
            <Link className='font-sans font-bold text-slate-900 no-underline '>{categoria.name}</Link>
            </button>
            </div>
        ))}
    </div>
)
}

