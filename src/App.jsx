import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginRegister from './Pages/LoginRegister';
import AdminPanel from './Pages/AdminPanel';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ListingPage from './Components/ListingComponents/ListingFeatures';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <>
	    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
