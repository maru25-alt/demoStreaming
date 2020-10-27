import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import {sortEntries} from '../utils/sort';

export default function Series() {
    const [series, setseries] = useState([]);
    const [isloading, setloading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const entries = 21
        axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json').then(res =>{
            let series = res.data.entries.filter(e => e.programType === 'series');
            series.slice(0 , entries);
            series.sort(sortEntries)
            setseries(series);
            setloading(false)
        }).catch(err => {
            console.log(err);
            setError(true)
        })
        
    }, [])
    console.log(series);
    return (
        <div className="movies">
            {isloading ?
             <p>loading...</p>
              : 
              <div className="movies__container">
               
                 <div> {error ?  <div>Opps, something went wrong...</div> :  <div className="movies__container">{series && series.map(movie => <Movie key={movie.title} movie={movie}/>)}</div>} </div>
              </div> 
            }
        </div>
    )
}


