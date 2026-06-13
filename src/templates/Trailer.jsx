import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function Trailer() {
    const backBtn = useNavigate()
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const trailer = useSelector((state) => state[category].info.video)
    const trailerUrl = trailer?.key ? `https://www.youtube.com/watch?v=${trailer.key}` : null
    const [isPlaying, setIsPlaying] = useState(true)


    return (
        <div className='fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center backdrop-blur-sm'>
            {/* Close Button */}
            <button
                onClick={() => { backBtn(-1) }}
                className='absolute top-6 right-6 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200  transform hover:scale-102 flex items-center gap-2'
            >
                <span>✕</span> Close
            </button>

            {/* Player Container */}
            <div className='relative w-full max-w-4xl mx-auto px-4'>
                <div className=' rounded-xl overflow-hidden shadow-2xl'>
                    <ReactPlayer
                        height={500}
                        width="100%"
                        playing={isPlaying}
                        controls={true}
                        src={`https://www.youtube.com/watch?v=${trailer.key}`}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Trailer
