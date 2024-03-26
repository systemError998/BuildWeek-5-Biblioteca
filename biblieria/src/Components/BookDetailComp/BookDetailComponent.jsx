import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Image, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import useAuthContext from "../../context/AuthContext";
import { cancelBooking, createBooking, extendBooking } from '../../slice/bookingSlice'
import ModBook from '../ModBook'


export default function BookDetailComponent() {
    const {user} = useAuthContext();
    
    const mybooking = useSelector(state => state.bookings.listaBooking)
    console.log(mybooking)
    let {id}= useParams()

    let [book, setBook] = useState({})
    let [copies, setCopies] = useState()
    let [alreadyBooked, setAlreadyBooked] = useState()
    let [alreadyExtended, setAlreadyExtended] = useState()
    
    let dispatch= useDispatch()
   const navigate = useNavigate();

    useEffect(() => {
        axios('/api/book/'+id).
            then(response => {
                console.log(response)    
                setBook(response.data)
                }).
            catch(err => console.log(err))
        
    },[mybooking])

    useEffect(() => {
        if(mybooking){
        setAlreadyBooked(mybooking.find((b) => b.book_id == id && b.is_active == 1))
        setAlreadyExtended(mybooking.find((b) => b.book_id == id && b.is_active == 1 && b.extended == 1))
        }
        setCopies(book.available_copies)
        
},)
    

                
return (
    book.author ? <> 
    <div className="container bg-white rounded-2 p-5 my-5 font-sans">
        <div>
           {user && user.is_admin ? 
           (
           <div>
            <button className='btn btn-light w-75'>Elimina libro</button>
            <ModBook />
           </div> 
           )
            :
            ('')
        }
        </div>
        <div className="row">
            <div className="col">
                <div className='border-1 border-light rounded-1'>
                    <Image src={book.cover_url}></Image>
                </div>
            </div>
            <div className="col">
            
                <h1 className='uppercase fs-2'>{book.title}</h1>
                <h3 className='text-secondary'>
                    <button className="flex no-underline"  onClick={()=> navigate(`/author/${book.author.id}`)}>
                        <span className="testoSide"> {book.author.full_name} </span>
                    </button>
                </h3>
                <div className='my-3'>
                    <p className='m-0'><b>Anno pubblicazione: </b> <span className='text-secondary'>{book.year}</span></p>
                    <p className='m-0'><b>Categoria: </b> <span className='text-secondary'>{book.category.name}</span></p>
                    <p className='m-0'><b>Copie disponibili: </b> <span className='text-secondary'>
                        {copies ? copies : 'da book'}
                        </span></p> {/* come lo faccio aggiornare in tempo reale? */}
                </div>
                <div className='my-4'>
                   {book.abstract}
                </div>
            </div>
        </div>
        <div className="row text-center mt-3">
            <div className="col">
                {alreadyBooked ? <>
                <button className='btn btn-danger w-50' onClick={()=> dispatch(cancelBooking(alreadyBooked.id))}>Disdici prenotazione</button>
                    {alreadyExtended ? 
                        <button className='btn btn-success w-50 disabled' onClick={()=> dispatch(extendBooking({id:alreadyBooked.id, expDate:alreadyBooked.expiring_date}))}>Prestito già esteso</button> :
                        <button className='btn btn-success w-50' onClick={()=> dispatch(extendBooking({id:alreadyBooked.id, expDate:alreadyBooked.expiring_date}))}>Estendi</button>
                        
                    }
                </> :
                <button className='btn btn-dark w-75' onClick={()=> dispatch(createBooking(book.id))}>PRENOTA</button>
                }
                
                
            </div>
        </div>
    </div>
    </> :
     <div className="container bg-white rounded-2 p-5 my-5 text-center">
    <Spinner></Spinner>
    </div>
  )

                    
}
  
