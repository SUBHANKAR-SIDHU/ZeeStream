import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noImage from "/noImage.jpeg";

function Top() {
    const [query, setQuery] = useState("");
    const [searchList, setSearchList] = useState([])

    const getSearch = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearchList(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSearch();
    }, [query])


    return (
        <div className='relative w-full flex flex-col items-center ' >
            <div className='w-[60%] h-[7vh] flex justify-center p-2 items-center border border-white rounded-full text-zinc-200'>
                <span className='text-xl font-extralight'><i className="ri-search-line"></i></span>
                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className='bg-transparent outline-none  w-full px-3 py-2 ' placeholder='Search your movie' />
                {query.length > 0 && (<span onClick={() => { setQuery("") }} className='text-xl font-extralight'>
                    <i className="ri-close-circle-line"></i>
                </span>)}
            </div>
            <div className='w-[52%] mt-2 max-h-[45vh] bg-zinc-400/50 absolute z-10 top-[85%]  border-zinc-200  text-zinc-100 rounded overflow-auto'>
                {searchList.map((s, i) => {
                    const imagePath = s.poster_path || s.profile_path || s.backdrop_path;
                    const imageSrc = imagePath ? `https://image.tmdb.org/t/p/w200${imagePath}` : noImage;
                    return (
                        <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='flex gap-3  border-zinc-200 border-b   hover:bg-zinc-500 duration-300 px-4 py-3'>
                        <img className='w-9 h-9 rounded-lg  object-cover' src={imageSrc} alt={s.imagePath} />
                            <h1>{
                                s.title || s.name || s.original_title || s.original_name
                            }</h1>
                        </Link>
                    )

                })}
            </div>
        </div>
    )
}

export default Top
