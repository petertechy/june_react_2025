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
import Card from './components/Card'
import ClickEvent from './components/ClickEvent'
import Product from './components/Product'
import Button from './components/Button'

const AllComponent = () => {
  const editButton = ()=>{
      alert("I am Edit")
    }
  //   const deleteButton = ()=>{
  //   alert("I am Delete")
  // }

  return (
    <>
    <Navbar/>
        <Button title="Edit" color="btn btn-warning me-3" edit ={editButton}/>
        <Button title="Delete" color="btn btn-danger me-3" edit ={editButton}/>
        <Button title="Update" color="btn btn-primary me-3"edit ={editButton}/>
    <Product/>
    <ClickEvent/>
      <div className='mx-auto d-flex '>
        <h1 className='text-primary border'>Good Morning</h1>
        <h1 className='text-danger border'>Good Afternoon</h1>
      </div>
      <Banner/>
      <Card/>
    </>
  )
}

export default AllComponent
