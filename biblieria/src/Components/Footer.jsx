import React from 'react'
import "../assets/css/babyStyle.css"


export default function Footer() {
  return (
    <>
      <footer className="bg-white mt-auto footer border-t-4 border-black">
        <div className="p-x text-white mx-auto ">
            <h1 className="text-2xl">Footer</h1>
            <div className="flex mb-5 pl-20 ">
                <div className="flex-grow flex flex-col">
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
                <div className="flex-grow flex flex-col">
                <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
                <div className="flex-grow flex flex-col">
                <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
                <div className="flex-grow flex flex-col">
                <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
            </div>
        <div className=" text-xs pt-5 text-center darkBlue align-middle pb-5">
            <p className='no-underline text-white text-2xl' href="">&copy;2024 Alessandro, Gregorio, Anna, Vincenzo, Victor, Cielo </p>
        </div>
    </div>
</footer>
    </>
  )
}
