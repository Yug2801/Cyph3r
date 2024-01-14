import React from 'react';
import '../css/features.css';
import { Link } from 'react-router-dom';
import images from '../image/images.jpg';
import images1 from '../image/images1.jpg';
import untitled from '../image/Untitled.jpg';
import z from '../image/z.jpg';

const Features = () => {
  return (
    <div id="features" className="features section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features-content">
              <div className="row" style={{ color: 'antiquewhite' }}>
                {/* Four equal-sized grid blocks in one row */}
                <div className="col-lg-3 col-md-3">
                  <div className="features-item first-feature">
                    <div className="icon">  <img src={images} className='bimage' alt="logo" /></div>
                    <h4>EVENT 1</h4>
                    <div className="line-dec"></div>
               
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero.
                    </p>
            
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="features-item second-feature">
                    <div className="icon"> <img src={images1} className='bimage' alt="logo" /></div>
                    <h4>EVENT 2</h4>
                    <div className="line-dec"></div>
               
                    <p>
                      Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.
                    </p>
            
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="features-item first-feature">
                    <div className="icon"> <img src={untitled} className='bimage' alt="logo" /></div>
                    <h4>EVENT 3</h4>
                    <div className="line-dec"></div>
              
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veniam.
                    </p>
           
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="features-item second-feature last-features-item">
                    <div className="icon"> <img src={z} className='bimage' alt="logo" /></div>
                    <h4>EVENT 4</h4>
                    <div className="line-dec"></div>
              
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime?
                    </p>
             
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
