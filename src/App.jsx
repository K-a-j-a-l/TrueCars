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
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
	    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/Contact" element={<ContactPage/>}/>
        <Route path="/About" element={<AboutPage/>}></Route>
        <Route path="/Product" element={<ProductPage/>}></Route>
        <Route path="/Listings" element={<ListingPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
