import React from 'react';
import '../css/Aboutus.css';
import Header from './header';
import Foote from './footer';
import profile from '../image/profile.png'

const AboutUsPage = () => {
  return (
    <div>
    <div><Header/></div>
    <div className='header1'></div>
      <section id="home">
        <div className="home-left">
          <img src={profile} alt="" />
        </div>
        <div className="home-right">
          <h2 className="home-heading">Welcome to Cyph3r Club</h2>
          <p className="home-para"> Cyph3r Club is a passionate community dedicated to the fascinating world of cybersecurity and ethical hacking. We are a group of tech enthusiasts, ethical hackers, and security professionals committed to exploring and promoting cyber awareness.</p>
          <a href="https://github.com/Yug2801/" className="btn">Discover Our blog</a>
        </div>
      </section>

      <section id="workFlow">
        <h2 className="heading"> Empowering Your Cybersecurity Journey </h2>
        <p className="para">At Cyph3r Club, we focus on fostering knowledge, skills, and ethical practices in the field of cybersecurity. Our mission is to empower individuals to become ethical hackers, defenders of digital landscapes, and contributors to a safer online environment.
       </p>
        <div className="num-container">
          <div className="num-item"><span>Join Our Community</span></div>
          <div className="num-item"><span>Explore Ethical Hacking</span></div>
          <div className="num-item"><span>Collaborate on Projects</span></div>
        </div>
      </section>

      <section id="goal">
        <div className="goal-left">
          <h2>Our Mission and Goals</h2>
          <p>Cyph3r Club aims to create a dynamic platform where individuals can learn, collaborate, and contribute to the ever-evolving field of cybersecurity. Our goals include:
        </p>
          <ul>
          <li>Providing education and resources in ethical hacking and cybersecurity.</li>
            <li>Promoting ethical hacking practices and awareness among students and professionals.</li>
            <li>Creating a supportive community for knowledge exchange and collaboration.</li>
         </ul>
          <a href="https://github.com/Yug2801/" className="btn"> Contact Us</a>
        </div>
        <div className="goal-right">
        <img src={profile} alt="" />
        </div>
      </section>

      <section id="our-Team">
        <h2>Our Member</h2>
        <div className="teamContainer">
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
          <img src={profile} alt="" />
            <h5 className="member-name">John Smith</h5>
            <span className="role">seo expert</span>
          </div>
          
        </div>
      
      </section>
      <div><Foote/></div>
    </div>
  );
};

export default AboutUsPage;
