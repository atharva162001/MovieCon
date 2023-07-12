import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNavBar from './Components/BottomNavBar'
import Carousel from './Components/Carousel'
import NavBar from './Components/NavBar'
import Trending from "./Components/Trending.js"
import Movies from './Components/Movies'
import Series from './Components/Series'
import Search from './Components/Search'

import "./Components/CSS Files/App.css"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Carousel />} exact />
          <Route path="/trending" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </div>
      <BottomNavBar />
    </BrowserRouter>
  )
}

export default App

