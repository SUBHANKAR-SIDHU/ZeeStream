import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import About from './components/About'
import Tv from './components/Tv'
import People from './components/people'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      <div className='w-screen h-screen  bg-linear-to-br from-slate-900 via-[#1f1e24] to-slate-900 flex'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/tvshows" element={<Tv />} />
          <Route path="/people" element={<People />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
