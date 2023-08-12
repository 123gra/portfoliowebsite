import "./HeroimgStyles.css";
import React from 'react'
import introimg from "../assets/logo.png";
import {Link} from "react-router-dom";
const Heroimg = () => {
  return (
  
  <div className="hero">
    
    <div className="mask">
      <img className="into-img" src={introimg} alt="introimg"/>
    </div>
    
    <div className="content">
        <p>Hi, I m free lancer</p>
        <h1>React developer</h1>
    
    
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn-light">
         Contact
        </Link>
    </div>
    
  </div>
  );
};

export default Heroimg;