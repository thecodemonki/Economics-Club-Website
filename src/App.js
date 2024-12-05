import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import Team from './Components/Team/Team.js';
import Resources from './Components/Resources/Resources.js';
import ContactUs from './Components/ContactUs/ContactUs.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;