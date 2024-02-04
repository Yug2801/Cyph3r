import React from 'react';
import '../css/cloud.css'; // Import your CSS for styling
import clou from '../svg/cloud.svg';
import { Link } from 'react-router-dom';
const CenteredCloudWithText = () => {
  return (
    <div className='centered-cloud-container'>
      <svg className='centered-cloud-svg'>
        <image href={clou} width="100%" height="100%" />

        {/* Example text placed at the center of the SVG */}
        <Link to="/contactus">
          <text x="50%" y="50%" textAnchor="middle" dy="-1em" className='cloud-text1' fill='black'>
            GET SOME QUERY
          </text>
          <text x="50%" y="50%" textAnchor="middle" dy="1em" className='cloud-text2'>
            LET'S TALK
          </text>
          </Link>
      </svg>
    </div>
  );
};

export default CenteredCloudWithText;
