//useEffect() = React Hook that tells react DO SOME CODE WHEN (pick one)\
//              This component re-renders
//              this component Mounts
//              the State of a value

// useEffect(function,[dependencies])
// 1. useEffect(()=>{})       // Runs after every re-render
// 2. useEffect(()=>{},[])    // runs only on mount
//3.useEffect(()=>{},[value]) // Runs on mount + when value change

//USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscription (real-time updates)
// #4 Fetching Data from an api
// #5 Clean up when a component Unmounts

import React from "react";
import { useState, useEffect } from "react";

const Mycomponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component mounted");

    const interval = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer stopped!");
    };
  }, []);

  //   useEffect(() => {
  //     first

  //     return () => {
  //       second
  //     }
  //   }, [third])

  function addCount() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <p> Count:{count}</p>
      <button onClick={addCount}>add</button>
      <button>oksyyy</button>
    </div>
  );
};
export default Mycomponent;
