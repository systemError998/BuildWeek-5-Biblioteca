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
                <p className='uppercase font-sans font-semibold border-b-2 py-2 text-center'> PREFERITI </p>

                <ul className="uppercase mx-auto font-sans font-semibold pl-2 flex flex-wrap gap-2">
                    {array.map((categoria, index) => (
                        <div className="flex flex-row gap-1 no-underline">
                        <div class="libricinoPreferito max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
                        <div className="relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))' }}>
                                <img class="w-full" src="https://centenaridanteschi.it/wp-content/uploads/2018/09/commedia_sito.jpg" />
                            </div>
                          
                            <div class="relative flex justify-between items-center flex-row pl-1 pt-0 z-50">
                                <button class="absolute bottom-2 px-2 py-2 darkBlue rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="pt-0 px-0.5 pb-2 text-gray-600 text-center">
                            <p class="text-sm truncate">La divina Commedia ciao come stai io bene te </p>
                            <p class="text-sm truncate">Dante Alighieri</p>
                            </div>
                      </div>
                      </div>
                    ))}
                </ul>
            </div>

        </>
    )
}


