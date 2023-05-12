import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './banner.css'


function Banner() {
    const img_full_path =  "https://image.tmdb.org/t/p/original"
    const [banner,setBanner]=useState([])

    useEffect(()=>{
        axios.get(requests.fetchNetflixOriginals)
        .then((result)=>{
            setBanner(
                result.data.results[
                    Math.floor(Math.random()*result.data.results.length
                    )])
        })
    },[])

  return (
    <>
      <div className='banner' 
        style={{backgroundImage:'url(' + img_full_path  + banner.backdrop_path + ')'}}>
       
       <div className='bannerIn'>
        <h1>{banner.name || banner.title || banner.original_name}</h1>
        <a href=''>PLAY</a>
        <a href=''>MY  LIST</a>
        <p>{banner.overview}</p>
       </div>

      </div>
    </>
  )
}

export default Banner