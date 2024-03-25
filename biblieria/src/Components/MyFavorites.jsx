import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/profilo.css"
import { useNavigate } from 'react-router-dom'
import "../assets/css/babyStyle.css"


export default function MyFavorites() {

    const navigate = useNavigate();

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
    return (
        <>
    <div className="bg-white py- mt-3 rounded-md ">
        <p className='uppercase font-sans font-semibold border-b-2 py-2 text-center'> i tuoi prefeeriti </p>

        <ul className="uppercase font-sans font-semibold pl-2">
            {array.map((categoria, index) => (
                <div key={index} className='row w-full my-2 pb-2 cursor-pointer hover:text-blue-800 '>
                    <div className='col-6 w-36'>
                        <img className=' h-36 ' src="https://m.media-amazon.com/images/I/41kbjmfuAdL._AC_UF1000,1000_QL80_.jpg" alt="" />
                    </div>
                    <div className='col-6 p-0 pt-1'>
                        <p className='text-xs'>viaggio al centro della terra</p>
                        <p className='text-sm'>giulio verne</p>
                    </div>
                </div>
            ))}
        </ul>
    </div>

</>

    )
}


