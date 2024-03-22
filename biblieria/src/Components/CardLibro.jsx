import React from 'react'
import "../assets/css/profilo.css"
import { useNavigate } from 'react-router-dom'

export default function CardLibro() {
    const navigate= useNavigate()
  return (
    <>
        <div onClick={()=> navigate("/login")} className="card w ms-5 text-center position-relative cardd" >
            <img src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/txtr357gqy3kkosgdtc0/do-twerk-dance-short-dance-dance-video-twerking-dance.png" className="card-img-top copertina" alt="..."/>
            <div className="pe-none mt-5 position-absolute top-0 start-50 translate-middle-x text-white cont">
                <h5 className="card-title">Titolo libro</h5>
                <p className="card-text">autore</p>
                <p className="card-text">anno pubblicazione</p>
                <p className="card-text">category</p>
                <p className="card-text">copie diponibili</p>
            </div>
        </div>
    </>
  )
}
