import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

import About from './About';
import Header from './Header';

import Loader from './Loader';
import Home from './Home';
import './App.css';
import './index.css';
import Portfolio from './Portfolio';

import Service from './Service';
import Contact from './Contact';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // optional
    });
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;


