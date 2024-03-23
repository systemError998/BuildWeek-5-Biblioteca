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
    {array.map((c)=>(
        <div className='row mx-1 justify-center'>
        <button class="btn btn-blue my-2.5">
        <img src="https://freesvg.org/img/Buecher-coloured.png" alt="metamask" class="w-6 h-6" />
        <Link className='font-sans font-bold text-slate-900 no-underline '>{c}</Link>
        </button>
      {/* <div className="row p-1 mx-4 mb-3">
            <Link className='text-light'>{c}</Link>
        </div>  */}
        </div>
    ))}
</div>
)
}

