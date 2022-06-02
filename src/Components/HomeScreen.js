import React from 'react'
import Banner from './Banner'
import './Homescreen.css'
import Nav from './Nav'
import userrequests from './Request'
import Row from './Row'
function HomeScreen() {
  return (
    <div className='homescreen'>
      <Nav/>

     <Banner/>

     <Row title="Netflix Originals"  isLargeRow fetchURL={userrequests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchURL={userrequests.fetchTrending}/>
     <Row title="Top Rated" fetchURL={userrequests.fetchTopRated}/>
     <Row title="Action Movies" fetchURL={userrequests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={userrequests.fetchComedyMovies}/>
     <Row title="Documentaries" fetchURL={userrequests.fetchDocumentaries}/>
     <Row title="Horror Movies" fetchURL={userrequests.fetchHorrorMovies}/>
     <Row title="Romantic Movies" fetchURL={userrequests.fetchRomanceMovies}/>

    </div>
  )
}

export default HomeScreen