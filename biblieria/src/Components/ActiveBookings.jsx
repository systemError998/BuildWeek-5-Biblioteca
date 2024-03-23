import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings } from '../slice/bookingSlice';
import { Link } from 'react-router-dom'

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
<div className='container bg-transparent border- rounded-md py-2.5 mx-auto justify-center'>
            <div className="row justify-center mx-auto">
                <button className="btn btn-blue my-2.5 w-44 gap-1 text-">
                <img src="https://cdn-icons-png.flaticon.com/128/7050/7050939.png" alt="metamask" className="w-6 h-6" />
                <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-default'>PRENOTAZIONI</Link>
                </button>
            </div>

            <div>
                {array.map((p, index) => (
                    <div key={index}>
                        <button className="btn btn-blue my-2.5 w-44 preferito">
                            <img src="https://www.ibs.it/images/9788832970944_0_536_0_75.jpg" alt="metamask" className="w-15 h-20" />
                            <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-default'>PREFERITI</Link>
                        </button>
                    </div>
                ))}
            </div>

            <div className="row mx-1 justify-center">
                <button className="btn btn-blue my-2.5 w-44">
                <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-pointer mx-auto'>VEDI ALTRI</Link>
                </button>
            </div>
        </div>
)
}

