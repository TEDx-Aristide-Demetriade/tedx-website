import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './resources/pictures/logo-black.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="bg-white text-black">
    <div className="container">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-4">
             {/* Image */}
             <img
            src={logo}
            alt="Image"
            className="img-fluid"
          />
        </div>
        {/* Column 2 */}
        <div className="col-md-4">
        <div className="text-center">
        <h4 className="font-weight-bold" style={{ fontFamily: 'Montserrat', fontSize: '32px' }}>Sitemap</h4>
               </div>
          <div className="row">
            <div className="col-4">
              <p>Despre noi</p>
              <p>Vorbitori</p>
              <p>Echipa</p>
            </div>
            <div className="col-4">
            <p>Bilete</p>
              <p>Sponsori</p>
              <p>Contact</p>
            </div>
            <div className="col-4">
            <p>Testimoniale</p>
              <p>Feedback</p>
              <p>Live events</p>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-md-4">
          <h4>Business Info</h4>
          <p>Address Line 1</p>
          <p>Email: example@example.com</p>
          <p>Tel: +123456789</p>
        </div>
      </div>
      
    </div>
     {/* White Line */}
     <div className="container">
        <div className="row">
          <div className="col">
            <hr style={{ backgroundColor: 'white', height: '20px' }} />
          </div>
        </div>
      </div>
    
    {/* Bottom Links */}
    <div className="container">
        <div className="row">
          <div className="col text-center p-3">
            <p>&copy; {new Date().getFullYear()} TEDxARISTIDE Website</p>
          </div>
          <div className="col text-center p-3">
            <a href="#">Cookie Policy</a>
            <span className="mx-2">|</span>
            <a href="#">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#">Terms &amp; Conditions</a>
          </div>
    
          <div className="col text-center p-3">
          <p style={{ marginBottom: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }}>Follow us:</p>
          <span>
            <a href="#"><FaFacebook className="social-icon" /></a>
            <span className="icon-space" />
            <a href="#"><FaTwitter className="social-icon" /></a>
            <span className="icon-space" />
            <a href="#"><FaInstagram className="social-icon" /></a>
          </span>
        </div>
      </div>
        </div>
      

        
          
  </footer>
  );
};

export default Footer;
