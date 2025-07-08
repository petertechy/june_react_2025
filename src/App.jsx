import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App