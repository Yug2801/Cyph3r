import React, { useState, useEffect } from "react";
// Import the component for smaller screens
import awsm from "../svg/awsm.svg";
import logo from "../logo.svg";
import gun from "../svg/gun.svg";
import line from "../svg/line.svg";

import { FaLinux } from "react-icons/fa6";
import ImageSlider from "./imageslider";
import TextSlider from "./textchange";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import blogsimage from "../json/blog";
import Frontlarge from "./front-large"; // Import the component for larger screens
import Frontsmall from "./front-small";
function Front() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1080);

  useEffect(() => {
    setMenuItems(blogsimage);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1080);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="body-front">
      {isLargeScreen ? <Frontlarge /> : <Frontsmall />}
    </div>
  );
}

export default Front;
