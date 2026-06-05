import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './templates/Trending'
import Popular from './templates/Popular'
import Movie from './templates/Movie'
import About from './components/About'

function App() {
  return (
    <>
      <div className='w-screen h-screen bg-[#1F1E24] flex'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
