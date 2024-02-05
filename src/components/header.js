import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import "../css/header.css";
import { Link } from "react-router-dom";
function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (showMediaIcons) {
        event.preventDefault();
      }
    };

    if (showMediaIcons) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const cleanup = () => {
      document.body.style.overflow = "auto";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup();
    };
  }, [showMediaIcons]);
  return (
    <header className={`App-header ${showMediaIcons ? "menu-open" : ""}`}>
      <div className="background-effect"></div>
      <div className={showMediaIcons ? "New-menu" : "menu"}>
        <img src={logo} className="App-logo" alt="logo" />
        <div
          className="Hamburger"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <a className="icon" href="https://github.com/Yug2801/">
            <FaAlignRight />
          </a>
        </div>

        <div className="upper-nav">
          <div className="left-nav">
            <ul>
              <li className="list-items">
              <Link to="/" className="list-item"  onClick={() => setShowMediaIcons(!showMediaIcons)}>HOME</Link>
                
              </li>
              <li className="list-items">
              <Link to="/about" className="list-item"  onClick={() => setShowMediaIcons(!showMediaIcons)}>ABOUT US</Link>
              </li>
              <li className="list-items">
              <Link to="/" className="list-item"  onClick={() => setShowMediaIcons(!showMediaIcons)}>HOME</Link>
              </li>
              <li className="list-items">
              <Link to="/blog" className="list-item"  onClick={() => setShowMediaIcons(!showMediaIcons)}>BLOG</Link>
                
              </li>
              <li className="list-items">
                <Link to="/contactus" className="list-item" onClick={() => setShowMediaIcons(!showMediaIcons)}>CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul>
              <li className="list-items">
                <a className="list-item" href="https://github.com/Yug2801/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li className="list-items">
                <a className="list-item" href="https://github.com/Yug2801/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li className="list-items">
                <a className="list-item" href="https://github.com/Yug2801/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  {" "}
                  <FaLinkedin /> Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="right-nav2">
            <ul>
              <li className="list-items">
                <a className="list-item" href="https://github.com/Yug2801/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <FaFacebook /> 
                </a>
              </li>
              <li className="list-items">
                <a className="list-item" href="https://github.com/Yug2801/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <FaInstagram /> 
                </a>
              </li>
              <li className="list-items">
                <a className="list-item" href="https://github.com/Yug2801/"onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  {" "}
                  <FaLinkedin /> 
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="down-nav">
          <div className="left-down-nav">Copyright © 2023 CYPH3R</div>
          <div className="right-down-nav">Designed by Yug Modi</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
