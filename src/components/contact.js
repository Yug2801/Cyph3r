import React from "react";
import Header from "./header";
import Foote from "./footer";
const Contactus = () => {
    return (
        <div>
        <div><Header/></div>
        <div className="container-contact100">
        <div className="Contactus">
        <form className="contact-form">
          <span className="contactform-html">Send Us A Message</span>
          <label className="name-html" htmlFor="first-name">Tell us your name *</label>
         <div className='name-contact'>
          <div className="firstname-input" data-validate="Type first name">
            <input id="first-name" className="input100" type="text" name="first-name" placeholder="First name" />
            <span className="focus-input100"></span>
          </div>
          <div className="Lastname-input" data-validate="Type last name">
            <input className="input100" type="text" name="last-name" placeholder="Last name" />
            <span className="focus-input100"></span>
          </div>
          </div>
          <label className="email-html" htmlFor="email">Enter your email *</label>
          <div className="email-input" data-validate="Valid email is required: ex@abc.xyz">
            <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
            <span className="focus-input100"></span>
          </div>
          <label className="call-html" htmlFor="phone">Enter phone number</label>
          <div className="call-input">
            <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +91 99999 99999" />
            <span className="focus-input100"></span>
          </div>
          <label className="Message-html" htmlFor="message">Message *</label>
          <div className="message-input" data-validate="Message is required">
            <textarea id="message" className="input100" name="message" placeholder="Write us a message"></textarea>
            <span className="focus-input100"></span>
          </div>
          <div className="Send-button">
            <button className="button-contact">Send Message</button>
          </div>
        </form>
        <div className="left-contact" >
        <div className='contact-info'>
          <div className="location">
            <div>
              <span className="loc-svg"></span>
            </div>
            <div className="Address-val">
              <span className="txt1">Address</span>
              <span className="txt2">IIIT KOTA PERMANENT CAMPUS RANPUR, KOTA</span>
            </div>
          </div>
          <div className="call-contact">
            <div>
              <span className="call-svg"></span>
            </div>
            <div className="Call-text">
              <span className="txt1">Lets Talk</span>
              <span className="txt3">+91 95093 48632</span>
            </div>
          </div>
          <div className="Mail-contact">
            <div>
              <span className="mail-svg"></span>
            </div>
            <div className="Mail-text">
              <span className="txt1">General Support</span>
              <span className="txt3">cyph3r@iiitkota.ac.in</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div ><Foote/></div>
    
        </div>
        );
    };
    
    export default Contactus;