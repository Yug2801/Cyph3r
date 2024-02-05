
import '../css/About.css';
import '../css/animate.css'
import { FaArrowRight } from 'react-icons/fa6';
import profile from '../image/profile.png'
import box from '../svg/box.svg'
import flag from '../svg/flag.svg'
import aswmg from '../svg/awsmg.svg'
import skull from '../svg/skull.svg'
import React, { useEffect, useRef  } from 'react';


function About() {
  
  const flagRef = useRef(null);
  const skullRef = useRef(null);
  const aswmgiRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Flag animation
      const flag = flagRef.current;
      const flagTriggerPoint = 800;

      if (window.scrollY > flagTriggerPoint) {
        flag.classList.add('animate-upward');
      } else {
        flag.classList.remove('animate-upward');
      }

      // Skull animation
      const skull = skullRef.current;
      const skullTriggerPoint = 500; // Adjust this value based on when you want the animation to start

      if (window.scrollY > skullTriggerPoint) {
        skull.classList.add('animate-upward');
      } else {
        skull.classList.remove('animate-upward');
      }

      // Aswmgi animation
      const aswmgi = aswmgiRef.current;
      const aswmgiTriggerPoint = 1200; // Adjust this value based on when you want the animation to start

      if (window.scrollY > aswmgiTriggerPoint) {
        aswmgi.classList.add('animate-upward');
      } else {
        aswmgi.classList.remove('animate-upward');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='About-body'>
    <div className='About'>
        <div className='about-left'>
            <div className='about-left-up'>ABOUT US :</div>
            <div className='about-left-down'>
            <div className='about-left-down-left'>We help ETHICAL
             HACKERS to learn
            about CYBERSECURITY.  </div>
            <div className='about-left-down-right'> <img src={box} alt={'box'}/></div>

            </div>
        </div>
        <div className='about-right'>
        <div className='about-right-left'></div>
        <div className='about-right-right'>
            <div className='about-right-up'><p>Hey you! CYPH3R was established in 2019 by KUNAL. We wanted to create a community to help society and aware them about cybersecurity. And throughout the years we realized that actually, we're quite good at this stuff. But our team best speaks for itself, so take a look at our projects below.</p></div>
            <div className='about-right-down'><a href='https://github.com/Yug2801/'>More about us <FaArrowRight/></a></div>
        </div>
        </div>
            
        <div className='down-about bounceOutLeft'>
            <div className='about-image'>
            <img src={profile} alt={'Profile'}/>
            </div>

   
    </div>
    <div className='aswmg'>
    <div className='skull' ref={skullRef}>
            <img src={skull} alt={' '}/>
            <div className='aswmgi' ref={aswmgiRef}>
    <img src={aswmg}  alt={' '}/>
    </div> 
    </div>
    <div className="flag" ref={flagRef}>
    <img src={flag}  alt={' '}/>
    </div>
    
    </div>
    </div>
    </div>


  );
}

export default About;
