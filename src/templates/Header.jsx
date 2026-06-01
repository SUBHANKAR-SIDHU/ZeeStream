import React from 'react'
import { Link } from 'react-router-dom'

function Header({ data = {} }) {
    const imagePath = data.poster_path || data.profile_path || data.backdrop_path || ''

    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${imagePath})`,
            backgroundPosition: "center 10%",
            backgroundSize: "cover"
        }} className='w-full h-[70vh] border border-zinc-700 rounded relative'>
            <div className=' w-[60%] absolute bottom-0 p-5  '>
                <h1 className=' text-zinc-200 font-bold text-4xl'>{
                    data.title || data.name || data.original_title || data.original_name
                }</h1>
                <p className='text-zinc-300 mt-2'>{data.overview.slice(1,200)} ...<Link className='text-blue-400'>more</Link></p>
                
                <div className='flex gap-3 mt-2 '>
                    <p className='text-white/60 '><i className="ri-rocket-fill"></i>{data.release_date?data.release_date:"No Information"}</p>
                    <p className='text-white/60 '><i className="ri-eye-fill"></i>{data.popularity}K</p>
                </div>
                <button className='px-3 py-2 mt-3 rounded bg-blue-400 hover:bg-blue-600 hover:cursor-pointer text-white '>Watch Trailer</button>
            </div>
        </div>
    )
}

export default Header
