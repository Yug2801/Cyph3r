

import React from 'react';
import Header from './header';
import Footer from './footer';
import Features from './features';
import '../css/blog.css'; 

const BlogPage = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <Header />
      </header>

      <div className="black-screen">  </div>

      <div className="white-strip"></div>

      <div>
        <Features />
        <Features/>
 
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>




    </div>

  );
};

export default BlogPage;
