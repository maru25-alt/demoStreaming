import React from 'react'

export default function Movie({name, path}) {

    
    return (
        <a className='card'  href={path}>
            <div className="card__img">
                     <h2>{name}</h2>
            </div>
            <p>Popular {name}</p>
        </a>
    )
}
