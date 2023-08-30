import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './resources/pictures/logo-black.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // For other icons, use their corresponding import statements




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
            <p><a className="links-color" href="/about">Despre noi</a></p>
    <p><a className="links-color" href="/speakers">Vorbitori</a></p>
    <p><a className="links-color" href="/team">Echipa</a></p>
            </div>
            <div className="col-4">
            <p><a  className="links-color" href="/buy-ticket">Bilete</a></p>
    <p><a className="links-color" href="/sponsors">Sponsori</a></p>
    <p><a className="links-color" href="/contact">Contact</a></p>
            </div>
            <div className="col-4 ">
            <p><a className="links-color" href="/">Home</a></p>
    <p><a className="links-color" href="/admin">Admin</a></p>
    <p><a className="links-color" href="#"></a></p>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-md-4 ">
          <h4>Business Info</h4>
          <p>Address: Strada Divizia 9 Cavalerie 64, Timișoara</p>
          <p>Email: organizare@tedxaristidedemetriade.com</p>
          <p>Tel: +40 740 684 642</p>
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
            <p>&copy; {new Date().getFullYear()} TEDxARISTIDE DEMETRIADE</p>
          </div>
          <div className="col text-center p-3">
            <a className="links-color" href="#">Cookie Policy</a>
            <span className="mx-2">|</span>
            <a  className="links-color" href="#">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a className="links-color" href="#">Terms &amp; Conditions</a>
          </div>
    
          <div className="col text-center p-3">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{ marginBottom: '0.5rem' }}>Follow us:</p>
    <span className="social-icons-container">
      <a href="#" className="social-icon"><FaFacebook /></a>
      <span className="icon-space" />
      <a href="#" className="social-icon"><FaInstagram /></a>
      <span className="icon-space" />
      <a href="#" className="social-icon"><FaLinkedin /></a>
    </span>
  </div>
</div>
      </div>
        </div>
      

        
          
  </footer>
  );
};

export default Footer;
