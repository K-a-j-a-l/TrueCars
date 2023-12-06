import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutHeader from "../Components/AboutHeader";
import LoginSidebar from "../Components/LoginSidebar";
import AboutSection1 from "../Components/AboutSection1";
import AboutSection2 from "../Components/AboutSection2";
import Testimonials from "../Components/Testimonials";
export default function AboutPage() {
    return (
	<div >
	   <Navbar/>
	   <AboutHeader/>
	   <LoginSidebar/>
	   <AboutSection1/>
	   <AboutSection2/>
	   <Testimonials/>
	   <Footer/>
        </div>
        )
}