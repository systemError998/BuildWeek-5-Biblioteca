import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings } from '../slice/bookingSlice';

export default function ActiveBookings() {
  const array = [
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione'
]

    const dispatch = useDispatch()

    const bookings= useSelector(state=>state.bookings.listaBooking)

    useEffect(()=>{
        dispatch(getBookings())
    },[])
    
    useEffect(()=>{
        console.log(bookings)
    },[bookings])

return (
<div className='container bg-dark rounded-2 py-3'>
    <div className="bg-body-secondary mb-3 py-1 mx-2 text-center">PRENOTAZIONI ATTIVE</div>
    {array.map((p)=>(
        <div className="row p-1 mx-4 mb-3 text-light d-flex justify-content-between align-items-center">
            <div className="col-2">
                <div className='border-1 border-light text-center rounded-1'>
                    IMG
                </div>
            </div>
            <div className="col">
                <p className='m-0 fs-5'>titolo libro</p>
                <span className='text-secondary'>autore libro</span>
            </div>
            <div className="col-5 text-secondary">
                <span><i>Scadenza prenotazione: 2024/06/30</i></span>
            </div>
            <div className="col">
                <button className='btn btn-light btn-sm'>ESTENDI PRENOTAZIONE</button>
            </div>
        </div>
    ))}
</div>
)
}

