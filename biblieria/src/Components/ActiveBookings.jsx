import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookings } from '../slice/bookingSlice';
import { Link } from 'react-router-dom'
import LittleSideBook from './HomepageComp/LittleSideBook'
import { getAuthors } from '../slice/authorSlice';

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

    const author = useSelector(state=>state.authors.selectedAuthor)

    useEffect(()=>{
        dispatch(getBookings())
    },[])
    
    useEffect(()=>{
        console.log(bookings)
    },[bookings])

    useEffect(()=>{
        bookings.map(e=>{
            dispatch(getAuthors(e.book.author_id))
        })

    },[])

    console.log(author)

return (
    <>
    <div className="bg-white py- mt-3 rounded-md ">
        <p className='uppercase font-sans font-semibold border-b-2 py-2 text-center'> PRENOTAZIONI ATTIVE </p>

        <ul className="uppercase font-sans font-semibold pl-2">
            {bookings.map((categoria, index) => (
                <div key={index} className='row w-full my-2 pb-2 cursor-pointer hover:text-blue-800 '>
                    <div className='col-6 w-36'>
                        <img className=' h-36 ' src="https://m.media-amazon.com/images/I/41kbjmfuAdL._AC_UF1000,1000_QL80_.jpg" alt="" />
                    </div>
                    <div className='col-6 p-0 pt-1'>
                        <p className='text-xs'>{categoria.book.title}</p>
                        <p className='text-sm'>s</p>
                        <button className='text-sm darkBlue py-2 px-4 text-white hover:text-blue-800 mt-4'> ESTENDI </button>
                    </div>
                </div>
            ))}
        </ul>
    </div>

</>

)
}

