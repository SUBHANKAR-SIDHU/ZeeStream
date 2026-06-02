import React, { useEffect, useState } from 'react'
import Sidenav from '../templates/Sidenav'
import Top from '../templates/Top'
import axios from '../utils/axios';
import Header from '../templates/Header';
import HorizontalCard from '../templates/HorizontalCard';
import Loading from '../templates/Loading';

function Home() {
    document.title = "Z | Homepage";
    const [wallpaper, setWallpaper] = useState(null)
    const [trending, setTrending] = useState(null)

    const getHanderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`)
            let randomWallpaper = data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomWallpaper);

        } catch (error) {
            console.log(error);
        }
    }
    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`)
            setTrending(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        !wallpaper && getHanderWallpaper();
        !trending && getTrending();
    }, [])
    

    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className='w-[80%] h-screen overflow-y-auto  gap-3 p-5 flex flex-col items-center  '>
                <Top />
                <div className='flex flex-col w-full gap-6'>
                    <Header data={wallpaper} />
                    <HorizontalCard data={trending} />
                </div>
            </div>
        </>
    ) : <Loading/>
}

export default Home

