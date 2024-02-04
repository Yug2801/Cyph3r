import React from "react";
import '../css/footer.css'

import { FaFacebookF } from 'react-icons/fa6';

import { FaInstagram } from 'react-icons/fa6';

import { FaLinkedinIn } from 'react-icons/fa6';
import { FaLinux } from 'react-icons/fa6';

function Foote(){
  return (
    <div className="footer">
    <div className="footer-left"></div>
    <div className="footer-text">
     <p > Copyright © 2023 CYPH3R <FaLinux/> Designed by Yug Modi </p>
     
     </div>
     <div className="footer-link">
      <FaFacebookF/>
      <FaInstagram/>
      <FaLinkedinIn/>
     </div>
    </div>
  );
};

export default Foote;
