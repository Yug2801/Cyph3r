import React from 'react';

import '../css/Aboutus.css'; 
import '../css/animate.css';

import Header from './header';
import Foote from './footer';
const App = () => {
  return (
    <div>
      {/* Navigation bar */}
     <div className='Header'><Header/></div>

      {/* Carousel */}
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="" alt="First slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Some Headline</h1>
              <p>A successful marriage requires falling in love many times, always with the same person.</p>
              <p><a className="btn btn-default btn-lg" href="#">Learn More</a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="" alt="Second slide" />
          <div className="carousel-caption">
            <h1>Some Headline</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil explicabo aperiam omnis tenetur quod, inventore quaerat nobis recusandae consequuntur.</p>
            <p><a className="btn btn-default btn-lg" href="#">Learn More</a></p>
          </div>
        </div>

        <div className="item">
          <img src="" alt="Third slide" />
          <div className="carousel-caption">
            <h1>Some Headline</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident nihil explicabo aperiam omnis tenetur quod, inventore quaerat nobis recusandae consequuntur.</p>
            <p><a className="btn btn-default btn-lg" href="#">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
      {/* Team section */}
      <div className="container team">
      <div className="row">
        <div className="col-lg-4">
          <img src="" alt="boy 1 image" className="img-circle animated wobble" width="140" height="140" />
          <h2>Team member 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis voluptatum, sit dicta voluptatem distinctio molestiae, harum dolor, sunt, porro dolorum? Sapiente corrupti nobis, enim.</p>
          <p><a href="#" className="btn btn-default">Sign Up &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img src="" alt="boy 2 image" className="img-circle animated wobble" width="140" height="140" />
          <h2>Team member 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis voluptatum, sit dicta voluptatem distinctio molestiae, harum dolor, sunt, porro dolorum? Sapiente corrupti nobis, enim.</p>
          <p><a href="#" className="btn btn-default">Sign Up &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img src="" alt="boy 3 image" className="img-circle animated wobble" width="140" height="140" />
          <h2>Team member 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis voluptatum, sit dicta voluptatem distinctio molestiae, harum dolor, sunt, porro dolorum? Sapiente corrupti nobis, enim.</p>
          <p><a href="#" className="btn btn-default">Sign Up &raquo;</a></p>
        </div>
      </div>
    </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Content sections */}
      <div className="container">
      <hr className="divider" />

      <div className="row content">
        <div className="col-md-7 mickey">
          <h2 className="content-heading">First heading goes here. <span className="text-muted"> this looks great</span> </h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quo cum beatae, adipisci officia rem voluptatem, accusamus non maxime illum aut odit voluptatibus accusantium culpa minima modi quas repellat sunt.</p>
        </div>
        <div className="col-md-5">
          <img src="" alt="playing kid" className="content-image img-responsive center-block" />
        </div>
      </div>


    </div>
      {/* Footer */}
     <Foote/>

    </div>
  );
}

export default App;
