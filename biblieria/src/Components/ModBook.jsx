import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function ModBook() {
  return (
    <>  
      
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="bi bi-card-text"></i>
        </button>

        
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modifica Libro</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="">
                    <input type="text" class="form-control my-1" name='title' placeholder='titolo libro' />
                    <input type="number" class="form-control my-1" name='year' placeholder='anno' />
                    <input type="number" class="form-control my-1" name='avalaible_copies' placeholder='copie disponibili' />
                    <input type="text" class="form-control my-1" name='cover_url' placeholder='url immagine' />
                    <input type="text" class="form-control my-1" name='abstract' placeholder='descrizione' />
                    <input type="text" class="form-control my-1" name='category' placeholder='categoria' />
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
                <button type="button" className="btn btn-success">Salva modifiche</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

