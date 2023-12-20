import { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginRegister from './Pages/LoginRegister';
import AdminPanel from './Pages/AdminPanel';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ListingPage from './Components/ListingComponents/ListingFeatures';

function App() {
  return (
    <>
	<ListingPage/>
    </>
  );
}

export default App;
