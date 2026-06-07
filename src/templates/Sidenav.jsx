import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    const sideNav = [
        {
            title: "Trending",
            icon : <i className="ri-fire-line"></i>,
            link: "/trending"
        },
        {
            title: "Popular",
            icon : <i className="ri-bard-line"></i>,
            link:"/popular"
        },
        {
            title: "Movies",
            icon : <i className="ri-video-line"></i>,
            link:"/movies"
        },
        {
            title: "Tv Shows",
            icon : <i className="ri-tv-line"></i>,
            link:"tvshows"
        },
        {
            title: "People",
            icon : <i className="ri-team-line"></i>,
            link: "/people"
        },
    ]
    return (
        <div className='w-[20%] pl-8 pr-4 py-5 text-zinc-100 h-screen  border-zinc-400 border-r-2 '>
            <h1 className='font-bold text-xl'><i className="ri-movie-2-line"></i> Zee<span className='font-semibold text-red-400'>Stream</span></h1>
            <nav>
                <h1 className='font-bold  mt-5 mb-3'>New Feeds</h1>
                {sideNav.map((s,i)=>(
                    <Link to={s.link} key={i} className='font-semibold  flex gap-1 mb-3 w-full px-4 py-2  hover:border-none hover:bg-[#6556CD] rounded duration-300'>{s.icon}{s.title}</Link>
                ))}
                <hr />
                <Link to={"/about"} className='font-semibold mt-4  flex gap-1 mb-3 w-full px-4 py-2  hover:border-none hover:bg-[#6556CD] rounded duration-300'><i className="ri-info-card-line"></i>About <span className='text-red-400'>Stream</span></Link>
                <Link to={"/contactus"} className='font-semibold  flex gap-1 mb-3 w-full px-4 py-2  hover:border-none hover:bg-[#6556CD] rounded duration-300'><i className="ri-customer-service-2-fill"></i>Contact Us</Link>
            </nav>
        </div>
    )
}

export default Sidenav
