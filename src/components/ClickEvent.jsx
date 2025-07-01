import React, { useState } from 'react'


const ClickEvent = () => {
    // let myAge = 12
    // let myName = "John"
    // const [nameOfVariable, nameOfFunctionThatWillChangeVariable] = useState(initialValue)
    
    const [myName, setmyName] = useState('Idris')
    const [myAge, setmyAge] = useState(9)
    
    const increaseAge = () =>{
        // myAge++
        // let newAge = myAge
        // setmyName("John")
        // setmyAge(newAge = newAge + 1)
        // let sum = a + b
        // console.log(sum)
        // myAge += 1
        // myAge = myAge + 1
        setmyAge(myAge+1)
        console.log(myAge)
    }

  return (
    <div className='my-3 text-center'>
        <h1>Dice 1: {Math.floor(Math.random()*10)}</h1>
        <h1>Dice 2: {Math.floor(Math.random()*10)}</h1>
            <button className='btn btn-success my-3'>Roll Dice</button>
        
        <h1>{myName}</h1>

            <button onClick={()=>setmyName('Olanrewaju')} className='btn btn-success'>Change Name</button>

        <h1 className='p-4'>I am {myAge} years old</h1>
        <div className='text-center'>
            <button onClick={()=>setmyAge(myAge+1)} className='btn btn-success'>Increase Age</button>
        </div>
    </div>
  )
}

export default ClickEvent

//React hooks - useState, useEffect, useRef (Fuctions are to directly relate with react)