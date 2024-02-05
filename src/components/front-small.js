import { useState, useEffect } from "react";

import "../css/frontsmall.css";

import blogsimage from "../json/blog";
import ImageSlider from "./imageslider";


function Frontsmall() {
  const [, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(blogsimage);
  }, []);

  return (
    <div className="body-front">
      <div className="Appfront-small">
      
          
          <div className="right">
          
          <ImageSlider blogsimage={blogsimage} />
        </div>
      <div className="down">
       

         
        </div>
        <div className="up">
          <div className="up-top">
          
            <div className="up-name">
            <p><span>CYPH3R</span>  Cybersecurity & Ethical hacking</p>
             
            </div>
            
          </div>
          <div className="up-down">
          <p>
          Team CYPH3R specializes in solving cybersecurity challenges. Whether you're facing threats, vulnerabilities, or any security issues, we have the expertise to address them. Our team is ready to assist you with any queries you may have – just reach out to us. With a proven track record in various projects, we take pride in our commitment to securing digital environments. Don't hesitate to contact us; we're here to help. Check our impressive portfolio of successful cybersecurity solutions, and you'll see why we are trusted in the field. Reach out to Team CYPH3R – we're just a call away from ensuring your digital safety. </p>
          </div>
       
      </div>
      
      </div>
    </div>
  );
}

export default Frontsmall;
