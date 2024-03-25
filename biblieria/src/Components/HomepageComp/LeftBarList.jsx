import React from 'react'

export default function LeftBarList( {categoria} ) {
    return (
        <>
            <li className="list text-center" key={categoria.id}>
                <button className="flex gap-1 no-underline uppercase" href="#">
                    <span className="iconcina w-7 sm:mx-2 mx-3 inline">
                    </span>
                    <span className="testoSide"> {categoria.name} </span>
                </button>
            </li>
        </>
    )
}
