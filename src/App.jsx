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
import Moviedetails from './components/Moviedetails'
import Tvshowdetails from './components/Tvshowdetails'
import Peopledetails from './components/Peopledetails'
import Trailer from "../src/templates/Trailer";

function App() {
  return (
    <>
      <div className='w-screen h-screen  bg-linear-to-br from-slate-900 via-[#1f1e24] to-slate-900 flex'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movie/details/:id" element={<Moviedetails />} >
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
          <Route path="/tvshows" element={<Tv />} />
          <Route path="/tv/details/:id" element={<Tvshowdetails />} />
          <Route path="/person" element={<People />} />
          <Route path="/person/details/:id" element={<Peopledetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
