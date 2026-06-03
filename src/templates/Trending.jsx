import React, { useState, useEffect } from 'react'
import Top from './Top'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios';
import Cards from './Cards';

function Trending() {
    const backBtn = useNavigate();
    const [cards, setCards] = useState([])
    const [category, setCategory] = useState('all')

    const getCards = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`)
            setCards(data.results);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getCards();
    }, [category])

    return (
        <div className='w-screen h-screen p-5 overflow-y-auto '>
            <div className='flex justify-center px-10 '>
                <h1 onClick={() => { backBtn(-1) }} className='text-xl uppercase hover:cursor-pointer hover:text-zinc-100 font-semibold text-zinc-300 flex gap-2'><i className="ri-arrow-left-long-line"></i>Trending</h1>
                <Top />
                <Dropdown title="Category" func={(e) => setCategory(e.target.value)} options={["all", "tv", "movie"]} />
            </div>
            <Cards data={cards} />
        </div>
    )
}

export default Trending
