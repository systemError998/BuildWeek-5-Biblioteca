import React from 'react'

export default function AuthorDetail() {
    return (
        <div className="container bg-dark rounded-2 text-light p-5">
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-between">
                    <div className=''>
                        <h1>Nome</h1>
                        <p><b>Data di nascita: </b> <span className="text-secondary">1970</span></p>
                        <p><b>NazionalitÃ : </b> <span className="text-secondary">bandierina demmerda</span></p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className='border-1 border-light text-center rounded-circle w-100' style={{height: "13em"}}>
                        IMG
                    </div>
                </div>
            </div>
            <div className="row gap-3 mt-3">
                <h3>Libri di ...</h3>
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
      )
}
