import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product2 = () => {
  return (
    <div className='mx-auto text-center col-7 my-3 p-4 border shadow'>
        <h1>Product Display</h1>

        <nav>
          <Link to="fish">Fish</Link> | <Link to="meat">Meat</Link> | <Link to="shoe">Shoe</Link>
        </nav>

        <Outlet/>
    </div>
  )
}

export default Product2