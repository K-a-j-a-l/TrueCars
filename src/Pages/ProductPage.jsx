import React from 'react';
import ProductInfoComponent from '../Components/ProductComponents/ProductInfoComponent';
import NavbarHeader from '../Components/Navbar';
import Footer from "../Components/Footer";

const ProductPage = () => {
  return (
    <div>
      <NavbarHeader/>
      <ProductInfoComponent />
      <Footer/>
    </div>
  );
};

export default ProductPage;
