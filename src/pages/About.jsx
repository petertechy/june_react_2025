import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    alert("I have just been clicked")
    navigate("/")
  }
  return (
    <div>
      <h1>This is About Page</h1>
      <button className="btn btn-lg btn-primary my-3" onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default About;
