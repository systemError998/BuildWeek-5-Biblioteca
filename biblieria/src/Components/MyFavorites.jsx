import React from 'react'
import { Link } from 'react-router-dom'

export default function MyFavorites() {
  const array = [
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione'
]
return (
<div className='container bg-dark rounded-2 py-3'>
    <div className="bg-body-secondary mb-3 py-1 mx-2 text-center">LISTA PREFERITI</div>
    {array.map((p)=>(
        <div className="row p-1 mx-4 mb-3 text-light d-flex justify-content-between align-items-center">
            <div className="col-3">
                <div className='border-1 border-light text-center rounded-1'>
                    IMG
                </div>
            </div>
            <div className="col">
                <p className='m-0 fs-5'>titolo libro</p>
                <span className='text-secondary'>autore libro</span>
            </div>
        </div>
    ))}
    <div className="mb-3 py-1 mx-2 text-center">
        <Link className='btn btn-light w-75'>Vedi tutti</Link>
    </div>
</div>
)
}
