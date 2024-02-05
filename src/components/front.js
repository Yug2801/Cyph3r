import React, { useState, useEffect } from "react";

import blogsimage from "../json/blog";
import Frontlarge from "./front-large"; // Import the component for larger screens
import Frontsmall from "./front-small";
function Front() {
  const [, setMenuItems] = useState([]);
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
