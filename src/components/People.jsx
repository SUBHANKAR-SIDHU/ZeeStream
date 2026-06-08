import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Top from '../templates/Top';
import Dropdown from '../templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../templates/Cards';

function People() {
    const backBtn = useNavigate();
    const [cards, setCards] = useState([])
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1)

    const getCards = async () => {
        try {
            const { data } = await axios.get(`/person/popular?page=${page}`)
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
    }, [])
    return (
        <div className='w-screen h-screen p-5 overflow-y-auto '>
            <div className='flex justify-center px-10 '>
                <h1 onClick={() => { backBtn(-1) }} className='text-xl uppercase hover:cursor-pointer hover:text-zinc-100 font-semibold text-zinc-300 flex gap-2'><i className="ri-arrow-left-long-line"></i>People's</h1>
                <Top />
            </div>
            <InfiniteScroll
                dataLength={cards.length}
                next={getCards}
                hasMore={hasMore}
                loader={<p>Loading...</p>}>
                <Cards data={cards} title="person" />
            </InfiniteScroll>
        </div>
    )
}

export default People
