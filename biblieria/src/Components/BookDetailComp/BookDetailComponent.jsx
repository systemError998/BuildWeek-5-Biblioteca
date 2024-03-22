import React from 'react'

export default function BookDetailComponent() {
  return (
    <div className="container bg-dark rounded-2 text-light p-5">
        <div className="row">
            <div className="col">
                <div className='border-1 border-light rounded-1'>
                    IMG
                </div>
            </div>
            <div className="col">
                <h1>Titolo Libro</h1>
                <h3>Autore</h3>
                <div className='my-3'>
                    <p className='m-0'><b>Anno pubblicazione: </b> <span className='text-secondary'>data</span></p>
                    <p className='m-0'><b>Categoria: </b> <span className='text-secondary'>categoria</span></p>
                    <p className='m-0'><b>Numero di pagine: </b> <span className='text-secondary'>200</span></p>
                    <p className='m-0'><b>Copie disponibili: </b> <span className='text-secondary'>4</span></p>
                </div>
                <div className='my-4'>
                    Trama...
                </div>
            </div>
        </div>
        <div className="row text-center">
            <div className="col">
                <button className='btn btn-light w-75'>PRENOTA</button>
            </div>
        </div>
    </div>
  )
}
