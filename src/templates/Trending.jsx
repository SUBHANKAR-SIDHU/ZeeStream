import React, { useState, useEffect } from 'react'
import Top from './Top'
import Dropdown from './Dropdown'
import { data, useNavigate } from 'react-router-dom'
import axios from '../utils/axios';
import Cards from './Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const backBtn = useNavigate();
    const [cards, setCards] = useState([])
    const [category, setCategory] = useState('all')
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1)

    const getCards = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day?page=${page}`)
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
                <h1 onClick={() => { backBtn(-1) }} className='text-xl uppercase hover:cursor-pointer hover:text-zinc-100 font-semibold text-zinc-300 flex gap-2'><i className="ri-arrow-left-long-line"></i>Trending</h1>
                <Top />
                <Dropdown title="Category" func={(e) => setCategory(e.target.value)} options={["all", "tv", "movie"]} />
            </div>
            <InfiniteScroll
                dataLength={cards.length}
                next={getCards}
                hasMore={hasMore}
                loader={<p>Loading...</p>}>
                <Cards data={cards} />
            </InfiniteScroll>
        </div>
    )
}

export default Trending
