import React from 'react'

function Cards({ data=[] }) {

    return (
        <div className='flex   mt-2 w-full'>
            <div className="flex mt-5  flex-wrap justify-center gap-4 ">
                {data.map((d, i) => {
                    const imagePath = d.poster_path || d.profile_path || d.backdrop_path;
                    const imageSrc = imagePath ? `https://image.tmdb.org/t/p/w200${imagePath}` : noImage;
                    return (
                        <div key={d.id ?? i}
                            className="cards flex ml-4 flex-col border-zinc-400 border left-[80vh] overflow-hidden h-56 w-50 items-center rounded-[15px] opacity-[0.9] duration-300 hover:opacity-[1] hover:scale-[1.1] hover:cursor-pointer">
                            <img className='h-1/2 w-full duration-300 object-cover  ' src={imageSrc}
                                alt={d.title || d.name || 'card'} />
                            <div className='ml-2'>
                                <h1 className=' text-zinc-200 font-semibold'>{
                                    d.title || d.name || d.original_title || d.original_name
                                }</h1>
                                <p className='text-zinc-400 text-[12px]'>{d.overview.slice(1, 150)}...</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
