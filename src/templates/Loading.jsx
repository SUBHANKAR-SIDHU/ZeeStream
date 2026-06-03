import React from 'react'
import loading from "/loading.gif";

function Loading() {
    return (
        <div className='w-screen bg-black h-screen flex justify-center items-center '>
            <img src={loading} alt="" />
        </div>
    )
}

export default Loading
