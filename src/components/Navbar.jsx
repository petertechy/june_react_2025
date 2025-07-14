import React from 'react'
import style from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className={style.container}>
          <h1 className={style.logo}>Navbar</h1>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/service"><li>Service</li></Link>
          <Link to="/about"><li>About</li></Link>
        </ul>
        </div>
    </>
  )
}

export default Navbar