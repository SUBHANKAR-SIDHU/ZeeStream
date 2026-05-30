import React from 'react'
import Sidenav from '../templates/Sidenav'
import Top from '../templates/Top'

function Home() {
    document.title = "Z | Homepage"
    return (
        <>
            <Sidenav />
            <div className='w-[80%] h-screen p-5 flex justify-center  '>
                <Top/>
            </div>
        </>

    )
}

export default Home

