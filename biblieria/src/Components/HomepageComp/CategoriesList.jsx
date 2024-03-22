import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesList() {
  const array = [
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria',
    'categoria'
]
return (
<div className='container bg-dark rounded-2 py-3'>
    <div className="bg-body-secondary mb-3 py-1 mx-2 text-center">CATEGORIE</div>
    {array.map((c)=>(
        <div className="row p-1 mx-4 mb-3">
            <Link className='text-light'>{c}</Link>
        </div>
    ))}
</div>
)
}

