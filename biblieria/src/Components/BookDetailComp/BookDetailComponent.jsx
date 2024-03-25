import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import useAuthContext from "../../context/AuthContext";
import { createBooking } from '../../slice/bookingSlice'


export default function BookDetailComponent() {
    const {user} = useAuthContext();
    console.log(user)
    
    let {id}= useParams()
    console.log(id)
    let [book, setBook] = useState({})
    let dispatch= useDispatch()
   

    useEffect(() => {
        axios('/api/book/'+id).
            then(response => {
                console.log(response)    
                setBook(response.data)

                }).
            catch(err => console.log(err))
        
    },[])

    useEffect(() => console.log(book.title), [book])
    

                
                    return (
                        book.author ? <> 
                        <div className="container bg-dark rounded-2 text-light p-5">
                            <div className="row">
                                <div className="col">
                                    <div className='border-1 border-light rounded-1'>
                                        <Image src={book.cover_url}></Image>
                                    </div>
                                </div>
                                <div className="col">
                                
                                    <h1>Titolo Libro: {book.title}</h1>
                                    <h3>Autore: {book.author.full_name}</h3>
                                    <div className='my-3'>
                                        <p className='m-0'><b>Anno pubblicazione: </b> <span className='text-secondary'>{book.year}</span></p>
                                        <p className='m-0'><b>Categoria: </b> <span className='text-secondary'>{book.category.name}</span></p>
                                        
                                        <p className='m-0'><b>Copie disponibili: </b> <span className='text-secondary'>{book.total_copies}</span></p>
                                    </div>
                                    <div className='my-4'>
                                       {book.abstract}
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col">
                                    <button className='btn btn-light w-75' onClick={()=> dispatch(createBooking(book.id))}>PRENOTA</button>
                                    

                                </div>
                            </div>
                        </div>
                        </> :
                        <div class='container bg-info p-5'>
                        <h1>mettere gestione caricamento</h1>
                    </div>
                      )
               
                    
                }
  

