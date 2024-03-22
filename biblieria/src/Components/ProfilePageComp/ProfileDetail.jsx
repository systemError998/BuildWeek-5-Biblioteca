import React from 'react'

export default function ProfileDetail() {
  return (
    <div className="container bg-dark rounded-2 text-light p-5">
        <div className="row d-flex justify-content-center">
            <div className="col d-flex justify-content-center">
                <div className='border-1 border-light text-center rounded-circle w-100' style={{height: "13em"}}>
                    IMG
                </div>
            </div>
            <div className="col d-flex justify-content-between">
                <div className=''>
                    <h1>Nome</h1>
                    <p><b>Email: </b> <span className="text-secondary">example@example.com</span></p>
                    <button className='btn btn-light'>Modifica i tuoi dati</button>
                </div>
            </div>
        </div>
        <div className="row gap-3 mt-4">
            <h3>Preferiti</h3>
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
