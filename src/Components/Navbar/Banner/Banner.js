import axios from '../../../helpers/axios'
import requests from '../../../helpers/request'
import React, { useEffect, useState } from 'react'

function Banner() {
    const [movie,setMovie]=useState([])
 useEffect(()=>{
    const fetchData=async()=>{
        const request= await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
        )
        return request
    }
    fetchData()
 },[])
 function letter(string,n){
    return string?.length>n?string.substr(0,n-1)+ "..." :string
 }
    return (
    <div className='overflow-x-hidden'>
        <div style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,backgroundSize:'cover', }} className=' h-[500px] relative  text-white  bg-center  md:bg-left-top'>
    <div className=' pt-[140px] ml-5 h-[190px]'>
    <h1 className='text-3xl md:text-5xl font-semibold pb-10'>
        {movie.tittle || movie.name || movie.orginal_name }
    </h1>
    </div>
        <div className=' ml-5 flex gap-3 mt-5'>
            <button className='bg-[rgba(51,51,51,0.5)] text-white p-2 px-7 hover:bg-white hover:text-black duration-500 transition-all  hover rounded cursor-pointer outline-none border-none font-semibold'>Play</button>
            <button className='bg-[rgba(51,51,51,0.5)] text-white p-2 px-7 hover:bg-white hover:text-black duration-500 transition-all rounded cursor-pointer outline-none border-none font-semibold'>My List</button>
        </div>
        <h1 className='w-[300px] md:w-[350px] leading-[1.3] mt-4 ml-5 text-lg md:text-xl  h-[80px] '>
            {letter(movie?.overview,150)}
        </h1>
        <div className='h-[154px] ' style={{backgroundImage:"linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111"}}></div>
        </div>
    </div>
  )
}

export default Banner