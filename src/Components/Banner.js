import axios from './localaxios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import userrequests from './Request';
function Banner() {
    const [movie, setMovie] = useState([]);

useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(userrequests.fetchNetflixOriginals)
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
        // setMovie(request.data.results)
    }

    fetchData()
    
},[])

  return (
      //image url from TMDB
    <div className='banner' style={{
        backgroundImage: `url('/images/flex.jpeg')`,
        backgroundPosition: 'center', 
        backgroundCover: 'cover'}}>
        <div className='banner__content'>
            <h1 className='banner_title'>
                {/* Movie Name */}

                {movie?.title || movie?.original_name || movie?.name}
            </h1>

            <div className='banner__buttons'>
                <button>Play</button>
                <button>My List</button>
            </div>

            <div className='banner__description'>
                {/* Set in the presnt, the series offers a bold, subversive take on Archie,
                Betty, Veronica and their friends, exploring the surreality of small-town li
                Set in the presnt, the series offers a bold, subversive take on Archie,
                Betty, Veronica and their friends, exploring the surreality of small-town li
                Set in the presnt, the series offers a bold, subversive take on Archie,
                Betty, Veronica and their friends, exploring the surreality of small-town li */}

                {movie?.overview}
                

            </div>


        </div>

        <div className='banner__fade'>

            

        </div> 

    </div>
  )
}

export default Banner