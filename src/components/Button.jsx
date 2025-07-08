import React from 'react'
import App from '../App'

const Button = ({title, color, edit}) => {
  //destructuring
  // console.log(props.color)
  return (
    <>
        {/* <button className={props.color}>{props.title}</button>  */}
        <button onClick={edit} className={color}>{title}</button> 
    </>
  )
}

export default Button