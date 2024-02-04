
import "../css/headarrow.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Features from "./features";
function Horizontal() {
return(
    <div className="blog-menu">
      <div className="head-arrow">
      <div className="hleft"></div>
        <div className="hmid">
          <p>Our Featured Blogs</p>
          <h2>BLOGS Fully crafted by Team CYPH3R</h2>
        </div>
        </div>
        <div className="feat"><Features/></div>
        <div className="allblog-link"><Link to= "/blog">+All Blogs <FaArrowRightLong/></Link></div>
        <hr/>
        </div>
          );
        };
        
        export default Horizontal;