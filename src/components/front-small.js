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
      
        <div className="up">
          <div className="up-top">
          
            <div className="up-name">
              <p>CYPH3R</p>
              <h1>CYBERSECURITY</h1>
              <h1>&</h1>
              <h1>ETHICAL HACKING</h1>
            </div>
          </div>

         
        </div>
          <div className="up-down">
            <div className="up-text">
             
          
             </div>
          </div>
          <div className="right">
          {" "}
          <ImageSlider blogsimage={blogsimage} />
        </div>
      <div className="down">
        <div className="down-midleft">
        <div className="down-midleft-text">
            <TextSlider blogsimage={blogsimage} />
          </div>
        </div>
        <div className="down-midright">
          

          
        </div>
      </div>
        <div className="down-midright-link">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
       
      </div>
    </div>
  );
}

export default Frontsmall;
