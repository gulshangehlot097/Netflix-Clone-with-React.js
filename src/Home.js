import React from 'react'
import Banner from './Banner';
import requests from './requests'
import Row from './Row'
import Header from './Header';

function Home() {
  return (
    <>
        <Header />
        <Banner />
        <Row endpoint={requests.fetchNetflixOriginals} heading='NetflixOriginals'
          isBigger={true}/>
        <Row endpoint={requests.fetchTrending} heading='Trending Now'/>
        <Row endpoint={requests.fetchTopRated} heading='Top Rated'/>
        <Row endpoint={requests.fetchActionMovies} heading='Action Movies'/>
        <Row endpoint={requests.fetchComedyMovies} heading='Comedy Movies'/>
        <Row endpoint={requests.fetchHorrorMovies} heading='Horror Movies'/>
        <Row endpoint={requests.fetchRomanceMovies} heading='Romance Movies'/>
        <Row endpoint={requests.fetchDocumentaries} heading='Documentaries'/>
    </>
  )
}

export default Home;