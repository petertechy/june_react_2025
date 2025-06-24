import React from 'react'
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
        <div className={style.container}>
          <h1 className={style.logo}>Navbar</h1>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
        </div>
    </>
  )
}

export default Navbar