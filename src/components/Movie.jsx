import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Top from '../templates/Top';
import Dropdown from '../templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../templates/Cards';

function Movie() {
    const backBtn = useNavigate();
    const [cards, setCards] = useState([])
    const [category, setCategory] = useState('now_playing')
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1)

    const getCards = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`)
            if (data.results.length > 0) {
                setCards((prev) => [...prev, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false)
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setPage(1);
        setCards([]);
        setHasMore(true);
        getCards(1);
    }, [category])

    return (
        <div className='w-screen h-screen p-5 overflow-y-auto '>
            <div className='flex  justify-center px-10 '>
                <h1 onClick={() => { backBtn(-1) }} className='text-xl uppercase hover:cursor-pointer hover:text-zinc-100 font-semibold text-zinc-300 flex gap-2'><i className="ri-arrow-left-long-line"></i>Movies</h1>
                <Top />
                <Dropdown title="Category" func={(e) => setCategory(e.target.value)} options={["upcoming", "popular", "now_playing"]} />
            </div>
            <InfiniteScroll
                dataLength={cards.length}
                next={getCards}
                hasMore={hasMore}
                loader={<p>Loading...</p>}>
                <Cards data={cards} title="movie" />
            </InfiniteScroll>
        </div>
    )
}

export default Movie
