import { useState, useEffect } from "react";
import house from "../svg/house.svg";
import logo from "../logo.svg";
import gun from "../svg/gun.svg";
import line from "../svg/line.svg";
import "../css/frontsmall.css";
import { FaAlignRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import blogsimage from "../json/blog";
import { FaLinux } from "react-icons/fa6";
import ImageSlider from "./imageslider";
import TextSlider from "./textchange";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import box from "../svg/box.svg"
import { Link } from 'react-router-dom';

function Frontsmall() {
  const [menuItems, setMenuItems] = useState([]);

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
