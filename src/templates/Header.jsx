import React from 'react'

function Header({ data = {} }) {
    const imagePath = data.poster_path || data.profile_path || data.backdrop_path || ''

    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${imagePath})`,
            backgroundPosition: "center 10%",
            backgroundSize: "cover"
        }} className='w-full h-[70vh] border border-zinc-700 rounded'>
            header
        </div>
    )
}

export default Header
