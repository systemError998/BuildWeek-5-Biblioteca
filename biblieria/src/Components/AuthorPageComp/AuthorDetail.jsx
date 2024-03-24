import React from 'react'
import '../../assets/css/babyStyle.css'

export default function AuthorDetail() {
    return (
        <>
        <div className="container px-0 bg-white mt-3 rounded-md">
            <div className=" flex flex-initial ml-44 border border-white rounded-r-md relative">

                <div className="flex justify-center gap-10 box-border w-1/2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Portrait_de_Dante.jpg/197px-Portrait_de_Dante.jpg" alt="" className="fotoAutore rounded-md" />
                    <div>
                        <div className='w-96 h-100 pt-2 rounded-lg darkText'>
                            <p className="font-bold font-serif text-2xl pb-2 inline-block"> DANTE NASONE ALIGHIERI </p>
                            <p className='font-sans '> FIRENZE </p>
                            <p className='font-sans '> 1265 - 1321 </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        <div className="container bg-white mt-3 rounded-md">
            <div className="row gap-3 mt-4 pt-3">
                <h3 className='darkText font-sans font-bold text-lg uppercase'>altri libri dello stesso autore</h3>
                <div className="col border-1 border-light rounded-1" style={{height: "10em"}}>
                    librone
                </div>
                <div className="col border-1 border-light rounded-1" style={{height: "10em"}}>
                    librone
                </div>
                <div className="col border-1 border-light rounded-1" style={{height: "10em"}}>
                    librone
                </div>
                <div className="col border-1 border-light rounded-1" style={{height: "10em"}}>
                    librone
                </div>
            </div>
        </div>

        </>
      )
}
