import React from 'react';
import { Link } from 'react-router-dom'; // Import Link directly


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'black'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src='https://consumer.tcimg.net/assets/_next/static/images/tc-logo-white-500-4f595f7ed8d0cc657d151b089a9bd452.png?auto=format&h=78&w=266' alt='Logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Listings">Listings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/privacypolicy">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/termsandconditions">Terms & Conditions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loginRegister">Login/Register</Link>
            </li>
          </ul>
            <div className='row'>
              <div className='col-5'>
              <button type="button" class="btn btn-outline-light rounded-pill px-4 py-2">Login</button>
              </div>
              <div className='col-5 flex-grow-1'>
              <button type="button" class="btn btn-light rounded-pill px-4 py-2">Sign-Up</button>
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;