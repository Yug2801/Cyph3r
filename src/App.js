import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Main from './components/Main';
import Contactus from './components/contact';
import Header from './components/header';
import BlogPage from './components/blog';
import AboutUsPage from './components/Aboutus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from './components/preloader';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time
    const fetchData = async () => {
      // Simulating a delay of 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
    {loading ? (
      <Preloader />
    ) : (
    <div className="App">
    <header><Header/></header>
      <Routes scrollToTop>
        <Route  path="/" element={<Main/>} />
        <Route  path="/Cyph3r.git" element={<Main/>} />
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
      </Routes>

    </div>
    )}
    </div>
  );
};
export default App;

