import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings } from '../slice/bookingSlice';
import { Link } from 'react-router-dom'
import LittleSideBook from './HomepageComp/LittleSideBook'

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
<div className="row mx-1 justify-center">
                <button className="btn btn-blue my-2.5 w-44 labelPreferiti">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/768px-Gold_Star.svg.png" alt="metamask" className="w-6 h-6" />
                <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-default'>BOOKINGS</Link>
                </button>
            </div>

            <div>
                {array.map((p, index) => (
                    <div key={index}>
                        <div key={index}>
                        <LittleSideBook />
                        <div className="row mx-1 justify-center">
                <button className="btn btn-blue my-2.5 w-44 labelPreferiti">
                <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-default'>ESTENDI PRENOTAZIONE</Link>
                </button>
            </div>
                    </div>
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

