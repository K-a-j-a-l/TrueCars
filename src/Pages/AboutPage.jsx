import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutHeader from '../Components/AboutComponents/AboutHeader';
import LoginSidebar from '../Components/LoginComponents/LoginSidebar';
import AboutSection1 from '../Components/AboutComponents/AboutSection1';
import AboutSection2 from '../Components/AboutComponents/AboutSection2';
import Testimonials from '../Components/AboutComponents/Testimonials';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <LoginSidebar />
      <AboutSection1 />
      <AboutSection2 />
      <Testimonials />
      <Footer />
    </div>
  );
}
