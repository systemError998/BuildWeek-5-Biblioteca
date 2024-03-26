import React, { useEffect } from 'react'
import '../../assets/css/babyStyle.css'
import { Link } from 'react-router-dom'
import useAuthContext from "../../context/AuthContext";
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getPreferiti } from '../../slice/preferitiSlice';


export default function ProfileDetail() {
    const preferiti= useSelector(state=>state.preferiti.listaPreferiti)
    const dispatch = useDispatch()
    const { user } = useAuthContext();

    useEffect(()=>{
        console.log(user)
    },[user])

    useEffect(()=>{
        dispatch(getPreferiti())
    },[])

    console.log(preferiti)
  return (

    <>
        { user ? <><div className="container px-0 bg-white mt-3 rounded-md">
            <div className=" flex flex-initial ml-44 darkBlue border border-white rounded-r-md relative">

                <Link to="/profile/edit" className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 absolute right-5 top-5 cursor-pointer transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                </Link>

                <div className="flex justify-center gap-10 box-border py-5 w-1/2">
                    <img src={user.profile_img} alt="" className="w-64 rounded-full" />
                    <div>
                        <div className='w-96 h-100 p-5 rounded-lg'>
                            <p className="font-bold font-serif text-4xl pb-2 inline-block text-white"> {user.name} </p>
                            <p className='font-sans text-white'> {user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container bg-white mt-3 rounded-md">
            <div className="row gap-3 mt-4 pt-3 mb-4">
                <h3 className='darkText font-sans font-bold text-lg uppercase'>I tuoi preferiti</h3>
                <div className='d-flex flex-wrap' >
                {preferiti && preferiti.map((e,index)=>
                    
                            <div key={index} className='my-2 pb-2 cursor-pointer hover:text-blue-800 '>
                                <div className=' w-36'>
                                    <img className=' h-36 ' src={e.book.cover_url} alt="" />
                                </div>
                                <div className='p-0 pt-1'>
                                    <p className='text-xs'>{e.book.title}</p>
                                    <p className='text-sm'>{e.book.author.full_name}</p>
                                    <button  className='text-sm darkBlue py-2 px-4 text-white hover:text-blue-800 mt-4'> ELIMINA </button>
                                </div>
                            </div>
                    
                )}
                
                </div>
            </div>
        </div></> : <Spinner animation="grow" variant="danger" /> }

        </>
  )
}
