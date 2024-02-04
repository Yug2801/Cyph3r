import { useState, useEffect } from "react";

import gun from "../svg/gun.svg"
import line from "../svg/line.svg"
import '../css/frontlarge.css'

import { FaArrowRight } from "react-icons/fa6";
import blogsimage from '../json/blog'
import { FaLinux } from "react-icons/fa6";
import ImageSlider from './imageslider';

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import fingerprint from '../svg/fingerprint.svg'
function Frontlarge() {
  const [, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(blogsimage);
  }, []);

{

 const screenSizeClass = window.innerWidth > 1080 ? 'App-front' : 'App-front-small';

  return (
    <div className="body-front">
     <div className={screenSizeClass}>
      
      
        <div className="Left">
          <span className="button-shadow">
            <div className="linuxicon-parent">
              <div className="linuxicon">
                <FaLinux />
              </div>
            </div>
              <img src={gun} className="gun" alt="logo" />
          <img src={line} className="line" alt="logo" />
          </span>
         
          <div className="name">
            <p>A CLUB OF IIIT KOTA</p>
            <h1>CYPH3R</h1>
          </div>
          <div className="text">
            <p>
              We are Team CYPH3R. Any problems regarding CYBERSECURITY we can
              solve it. CONTACT US for any type of query you get. Don't believe
              us? Check our blogs and don't be a stranger, we're just a call
              away.
            </p>
          </div>
        </div>
        
        <div className="right"> <ImageSlider blogsimage={blogsimage}/></div>
       
      </div>
      <div className="down">
        <div className="down-left">
          <a href="https://github.com/Yug2801/">
            ABOUT US <FaArrowRight />
          </a>
        </div>
        <div className="down-midleft">
        <div className="down-midleft-link">
          <FaFacebook/><FaInstagram /><FaLinkedin />
          </div>
          
      
         
        </div>
        <div className="down-midright">
        <img src={fingerprint} className="finger" alt="logo" />
       <a href="https://github.com/Yug2801/">contact@cyph3r</a>
        </div>
       
        <div className="down-right">
          <Link to="/blog">
            BLOGS <FaArrowRight />
            </Link>
        </div>
      </div>
      </div>

  );
  }
}   


export default Frontlarge;
