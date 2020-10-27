import React from 'react'


export default function Movie({movie}) {
    return (
        <div  className="movie">
            <img alt={movie.title} width="100" src={movie.images['Poster Art'].url}></img>
            <h6 className="title">{movie?.title}</h6>
        </div>
    )
}
