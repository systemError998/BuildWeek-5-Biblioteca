import React from 'react'
import "../assets/css/babyStyle.css"


export default function Footer() {
  return (
    <>
      <footer class="bg-white mt-auto footer border-t-4 border-black">
        <div class="p-x text-white mx-auto ">
            <h1 class="text-2xl">Footer</h1>
            <div class="flex mb-5 pl-20 ">
                <div class="flex-grow flex flex-col">
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
                <div class="flex-grow flex flex-col">
                <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
                <div class="flex-grow flex flex-col">
                <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
                <div class="flex-grow flex flex-col">
                <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                    <a className='no-underline text-black text-2xl' href="/#home">Boom</a>
                </div>
            </div>
        <div class=" text-xs pt-5 text-center darkBlue align-middle pb-5">
            <a className='no-underline text-white text-2xl' href="">&copy;2024 Gregorio, Alessandro, Annna, Vincenzo, Victor, Cielo </a>
        </div>
    </div>
</footer>
    </>
  )
}
