import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lucas Baldasso</title>
          <link rel="canonical" href="https://1baldasso-portfolio.vercel.app/" />
        </Helmet>
      </HelmetProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
