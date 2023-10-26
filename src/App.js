
// videdo 67 -  creating a complete react js website 

import React from 'react';
import './index.css';
import { Route, Routes, redirect as Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route exact="true" path="/Contact" element={<Contact />}></Route>
        <Route exact="true" path="/About" element={<About />}></Route>
        <Route exact="true" path="/Services" element={<Services />}></Route>
        <Route Redirect to="/" />
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>)
}
export default App;


// C:\Users\rekha\OneDrive\Desktop\react\react-thapa-technical\githubreactjs-site1\FirstReactSite
















