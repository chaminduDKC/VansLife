import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Navigation/Navbar'
import Footer from './Footer/Footer'
import Vans from './Pages/Vans'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vans' element={<Vans/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
