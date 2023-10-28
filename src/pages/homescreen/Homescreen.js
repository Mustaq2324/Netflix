import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Banner from '../../Components/Navbar/Banner/Banner'
import  Row  from '../../Components/Navbar/Row/Row'
import request from '../../helpers/request'
function Homescreen() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Row 
      title="Netflix Originals" 
      fetchUrl={request.fetchNetflixOriginals}
      isLargeRow
      />
      <Row  title="Trending Now" fetchUrl={request.fetchTrendeing}/>
      <Row  title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row  title="Action Movie" fetchUrl={request.fetchActionMovies}/>
      <Row  title="Comedy Movie" fetchUrl={request.fetchComedyMovies}/>
      <Row  title="Horror Movie" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row  title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  )
}

export default Homescreen