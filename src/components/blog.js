

import React from 'react';
import Header from './header';
import Footer from './footer';
import Features from './features';
import '../css/blog.css'; 
import logo from '../logo.svg'
import back from '../image/back.jpg'
const BlogPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Black Screen with Centered Blogs */}
      <div className="black-screen">
        <div>
          <h1>BLOGS</h1>
          {/* Add more blog content as needed */}
        </div>
      </div>

      <div className="white-strip"></div>

    
      {/* Blog Elements */}
      <div>
        <Features />
        <Features/>
        {/* Add more detailed blog content as needed */}
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>




    </div>

  );
};

export default BlogPage;
