import React, { useEffect, useState } from 'react'
import axios from './localaxios'
import './Row.css'
function Row({title, isLargeRow, fetchURL}) {
    const[movies, setMovies] = useState([]);

const base_url = "https://image.tmdb.org/t/p/original/";


useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchURL);

        setMovies(request.data.results);
        return request
    }
    fetchData()
},[fetchURL])

  return (
    <div className='row'>
        <h1>{title}</h1>

        <div className='row__posters'>
            {
                movies.map(movie=>{
                      return  <img src={`${base_url}${isLargeRow? movie.poster_path : movie.
                        backdrop_path}`} className={`rowposter ${isLargeRow && "largeImage"}`}
                        key={movie.id}
                        />

                })
            }
            
        </div>

    </div>
  )
}

export default Row