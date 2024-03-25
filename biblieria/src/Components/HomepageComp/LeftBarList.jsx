import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';



export default function LeftBarList( {categoria} ) {

    const dispatch = useDispatch()

    return (
        <>
            <li className="list text-center" key={categoria.id} >
                <button className="flex gap-1 no-underline uppercase" onClick={() => { dispatch(getAllBooks({category:categoria.name})) }}>
                    <span className="iconcina w-7 sm:mx-2 mx-3 inline">
                    </span>
                    <span className="testoSide"> {categoria.name} </span>
                </button>
            </li>
        </>
    )
}
