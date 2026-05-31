import React from 'react'
import noImage from "/noImage.jpeg";

function HorizontalCard({ data = [] }) {

    return (
        <div className="carousel w-full">
            <h1 className='text-2xl mb-1 text-white font-semibold'>Trending</h1>
            <div className='flex overflow-x-auto min-h-full w-full'>
                <div className="group  flex animate-cardInfinite items-center justify-center gap-4 ">
                    {data.map((d, i) => {
                        const imagePath = d.poster_path || d.profile_path || d.backdrop_path;
                        const imageSrc = imagePath ? `https://image.tmdb.org/t/p/w200${imagePath}` : noImage;
                        return (
                            <div key={d.id ?? i}
                                className="cards flex   ml-4 flex-col border-zinc-200 border left-[80vh] overflow-hidden h-44 w-50 items-center rounded-[20px] opacity-[0.9] duration-300 hover:opacity-[1] hover:scale-[1.2] hover:cursor-pointer">
                                <img className='h-1/2 w-full duration-300 object-cover  ' src={imageSrc}
                                    alt={d.title || d.name || 'card'} />
                                <div className='ml-2'>
                                    <h1 className=' text-zinc-200 font-semibold'>{
                                        d.title || d.name || d.original_title || d.original_name
                                    }</h1>
                                    <p className='text-zinc-400 text-sm'>{d.overview}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="group  flex animate-cardInfinite items-center justify-center gap-4 ">
                    {data.map((d, i) => {
                        const imagePath = d.poster_path || d.profile_path || d.backdrop_path;
                        const imageSrc = imagePath ? `https://image.tmdb.org/t/p/w200${imagePath}` : noImage;
                        return (
                            <div key={d.id ?? i}
                                className="cards flex   ml-4 flex-col border-zinc-200 border left-[80vh] overflow-hidden h-44 w-50 items-center rounded-[20px] opacity-[0.9] duration-300 hover:opacity-[1] hover:scale-[1.2] hover:cursor-pointer">
                                <img className='h-1/2 w-full duration-300 object-cover  ' src={imageSrc}
                                    alt={d.title || d.name || 'card'} />
                                <div className='ml-2'>
                                    <h1 className=' text-zinc-200 font-semibold'>{
                                        d.title || d.name || d.original_title || d.original_name
                                    }</h1>
                                    <p className='text-zinc-400 text-sm'>{d.overview}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard
