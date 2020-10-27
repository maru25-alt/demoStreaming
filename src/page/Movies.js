import React,  { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import {sortEntries} from '../utils/sort';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false)
    const [isloading, setloading] = useState(true);

    useEffect(() => {
        const entries = 21
        axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json').then(res =>{
            let movies = res.data.entries.filter(e => e.programType === 'movie').filter(e => e.releaseYear >= 2010);
            movies.slice(0 , entries);
            movies.sort(sortEntries)
            setMovies(movies);
            setloading(false)
        }).catch(err => {
            console.log(err);
            setError(true)
        })
        
    }, [])

  
   
    return (
        <div className="movies">
            {isloading ?
             <p>Loading...</p>
              : 
             <div> {error ?  <div>Opps, something went wrong...</div> :  <div className="movies__container">{movies && movies.map(movie => <Movie key={movie.title} movie={movie}/>)}</div>} </div>
            }
        </div>
    )
}
