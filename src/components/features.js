import React from 'react';
import '../css/features.css';
import images from '../image/images.jpg';
import images1 from '../image/images1.jpg';
import untitled from '../image/Untitled.jpg';
import z from '../image/z.jpg';

const Features = () => {
  return (
    <div className="features" >
      <div className="container-blog">
        <div className="row1">
          <div>
            <div className="features-content">
              <div className="row" style={{ color: 'antiquewhite' }}>
               
                <div>
                  <div className="features-item ">
                    <div className="icon">  <img src={images} className='bimage' alt="logo" /></div>
                    <h4>EVENT 1</h4>
                    <div className="line-dec"></div>
               
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero.
                    </p>
            
                  </div>
                </div>
                <div >
                  <div className="features-item ">
                    <div className="icon"> <img src={images1} className='bimage' alt="logo" /></div>
                    <h4>EVENT 2</h4>
                    <div className="line-dec"></div>
               
                    <p>
                      Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.
                    </p>
            
                  </div>
                </div>
                <div >
                  <div className="features-item ">
                    <div className="icon"> <img src={untitled} className='bimage' alt="logo" /></div>
                    <h4>EVENT 3</h4>
                    <div className="line-dec"></div>
              
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veniam.
                    </p>
           
                  </div>
                </div>
                <div >
                  <div className="features-item">
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
