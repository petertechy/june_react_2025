import React from "react";
import style from "./Banner.module.css"

const Banner = () => {
  const myName = "Emmanuel";
  const myStyle = {
    backgroundColor: "black",
    padding: "1rem",
    textAlign: "center",
    color: "white",
    fontSize: "2.5rem"
  };

  return (
    <>
      {/* <h1 style = {{backgroundColor: "black", padding:"1rem", textAlign: "center"}}>Study to become a global talent</h1> */}
     <div className={style.container}>
       <h1 style={myStyle}>Study to become a global talent</h1>
      <h1>Hello {myName}</h1>
     </div>
    </>
  );
};

export default Banner;

//Interpolation - {}
