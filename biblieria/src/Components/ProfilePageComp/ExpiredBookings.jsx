import React from 'react'

export default function ExpiredBookings() {
  const array = [
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione',
    'prenotazione'
]
return (
<div className='container bg-dark rounded-2 py-3'>
    <div className="bg-body-secondary mb-3 py-1 mx-2 text-center">PRENOTAZIONI SCADUTE</div>
    {array.map((p)=>(
        <div className="row p-1 mx-4 mb-3 text-light d-flex justify-content-between align-items-center">
            <div className="col-2">
                <div className='border-1 border-light text-center rounded-1'>
                    IMG
                </div>
            </div>
            <div className="col-4">
                <p className='m-0 fs-5'>titolo libro</p>
                <span className='text-secondary'>autore libro</span>
            </div>
            <div className="col-6 text-secondary">
                <span><i>Prenotazione scaduta il: 2024/06/30</i></span>
            </div>
        </div>
    ))}
</div>
)
}
