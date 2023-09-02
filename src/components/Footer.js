import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './resources/pictures/logo-white.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // For other icons, use their corresponding import statements




const Footer = () => {
  return (
    
        <footer className="bg-dark text-white">
        <div className="container mt-4">
        <div className="row ">
          <div className="col-md-4">
            <img src={logo} alt="Image" className="img-fluid logo" />
            
          </div>
          <div className="col-md-4 mt-4">
            <div className="text-center">
              <h4 className="font-weight-bold">Sitemap</h4>
            </div>
            <div className="row">
            <div className="col-4">
            <p><a className="links-color" href="/about">Despre noi</a></p>
    <p><a className="links-color" href="/speakers">Vorbitori</a></p>
    <p><a className="links-color" href="/team">Echipa</a></p>
            </div>
            <div className="col-4">
            <p><a  className="links-color" href="https://forms.gle/6LjW2bPviRRWo4J38">Bilete</a></p>
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
          <div className="col-md-4 mt-4">
            <h4>Contact Us</h4>
            <p>Strada Divizia 9 Cavalerie 64, Timișoara</p>
            <p>Email: organizare@tedxaristidedemetriade.com</p>
            <p>Tel: +40 740 684 642</p>
          </div>
        </div>
      </div>
      
      <hr className="mt-5" />
      
      <div className="container">
        <div className="row">
          <div className="col text-center py-3">
            <p>&copy; {new Date().getFullYear()} TEDxARISTIDE DEMETRIADE</p>
          </div>
          <div className="col text-center py-3">
            <a className="footer-link" href="#">Cookie Policy</a>
            <span className="mx-2">|</span>
            <a className="footer-link" href="#">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a className="footer-link" href="#">Terms &amp; Conditions</a>
          </div>
          <div className="col text-center py-3">
            <div className="social-icons">
              <a href="https://www.facebook.com/people/TEDxAristide-Demetriade/100093140688753/" className="social-icon"><FaFacebook /></a>
              <a href="https://www.instagram.com/tedxaristidedemetriade/" className="social-icon"><FaInstagram /></a>
              <a href="https://ro.linkedin.com/company/tedxaristide-demetriade" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>

        
          

  
  );
};

export default Footer;
