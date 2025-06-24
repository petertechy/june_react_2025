//React functional component - a function that returns JSX and exports it
//JSX - Javascript + XML

// function Azeem(){

// }

// const App = () => {
//   return(
//     <h1>Hello Students</h1>
//   )
// }

// export default App;

import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
    <Navbar/>
      <div className='mx-auto d-flex '>
        <h1 className='text-primary border'>Good Morning</h1>
        <h1 className='text-danger border'>Good Afternoon</h1>
      </div>
      <Banner/>
    </>
  )
}

export default App
