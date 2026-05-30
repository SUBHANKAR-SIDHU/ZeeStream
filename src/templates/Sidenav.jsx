import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    const sideNav = [
        {
            title: "Trending",
            icon : <i className="ri-fire-line"></i>
        },
        {
            title: "Popular",
            icon : <i className="ri-bard-line"></i>
        },
        {
            title: "Movies",
            icon : <i className="ri-video-line"></i>
        },
        {
            title: "Tv Shows",
            icon : <i className="ri-tv-line"></i>
        },
        {
            title: "People",
            icon : <i className="ri-team-line"></i>
        },
    ]
    return (
        <div className='w-[20%] pl-8 pr-4 py-5 text-zinc-100 h-screen  border-zinc-400 border-r-2 '>
            <h1 className='font-bold text-xl'><i className="ri-movie-2-line"></i> Zee<span className='font-semibold text-red-400'>Stream</span></h1>
            <nav>
                <h1 className='font-bold  mt-5 mb-3'>New Feeds</h1>
                {sideNav.map((s,i)=>(
                    <Link key={i} className='font-semibold  flex gap-1 mb-3 w-full px-4 py-2  hover:border-none hover:bg-[#6556CD] rounded duration-300'>{s.icon}{s.title}</Link>
                ))}
                <hr />
                <Link className='font-semibold mt-4  flex gap-1 mb-3 w-full px-4 py-2  hover:border-none hover:bg-[#6556CD] rounded duration-300'><i className="ri-info-card-line"></i>About <span className='text-red-400'>Stream</span></Link>
                <Link className='font-semibold  flex gap-1 mb-3 w-full px-4 py-2  hover:border-none hover:bg-[#6556CD] rounded duration-300'><i className="ri-customer-service-2-fill"></i>Contact Us</Link>
            </nav>
        </div>
    )
}

export default Sidenav
