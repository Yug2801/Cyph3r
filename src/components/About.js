
import '../css/About.css';
import { FaArrowRight } from 'react-icons/fa6';
import profile from '../image/profile.png'
import box from '../svg/box.svg'
import flag from '../svg/flag.svg'
import aswmg from '../svg/awsmg.svg'
import skull from '../svg/skull.svg'
function About() {
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
            <div className='about-right-up'>Hey you! CYPH3R was established in 2019 by KUNAL. We wanted to create a community to help society and aware them about cybersecurity. And throughout the years we realized that actually, we're quite good at this stuff. But our team best speaks for itself, so take a look at our projects below.</div>
            <div className='about-right-down'><a href='#'>More about us <FaArrowRight/></a></div>
        </div>
        </div>
            
        <div className='down-about'>
            <div className='about-image'>
            <img src={profile} alt={'Profile photo'}/>
            </div>

   
    </div>
    <div className='aswmg'>
    <div className='skull'>
            <img src={skull} alt={' '}/>
            <div className='aswmgi'>
    <img src={aswmg}  alt={' '}/>
    </div> 
    </div>
    <div className='flag'>
    <img src={flag}  alt={' '}/>
    </div>
    
    </div>
    </div>
    </div>


  );
}

export default About;
