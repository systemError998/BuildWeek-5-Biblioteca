import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Categories.css"
import "../assets/css/profilo.css"
import { useNavigate } from 'react-router-dom'
import "../assets/css/Categories.css"
import LittleSideBook from './HomepageComp/LittleSideBook'


export default function MyFavorites() {
    
    const navigate = useNavigate();
    
    const array = [
        'prenotazione',
        'prenotazione',
        'prenotazione',
        'prenotazione'
    ]
    return (
        <div className='container bg-slate-900 rounded-md py-2.5 mx-auto justify-center'>
            <div className="row mx-1 justify-center">
                <button className="btn btn-blue my-2.5 w-44 labelPreferiti">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/768px-Gold_Star.svg.png" alt="metamask" className="w-6 h-6" />
                <Link className='font-sans font-bold text-slate-900 no-underline text-sm cursor-default'>PREFERITI</Link>
                </button>
            </div>

            <div>
                {array.map((p, index) => (
                    <div key={index}>
                        <LittleSideBook />
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


