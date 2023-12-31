import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssCustom/customStyles.css"; // Create a CSS file for styling
import { AppContext } from "../store/AppContext";
import logo from './resources/pictures/logo-white.png';
import "./cssCustom/Footer.css"

function Navigation() {
  const isSoldOut = true;
  const location = useLocation();
  const navigation = useNavigate();
  const { authToken, setOpenAdminPanel, setAuthToken } = useContext(AppContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(authToken);
  }, [authToken]);

  const handleClickAdminPanel = () => {
    if (!authToken) {
      setOpenAdminPanel(true);
      return;
    }
    setIsLoggedIn(true);
    navigation("/admin");
  };

  const handleClickLogout = () => {
    setAuthToken("");
    // localStorage.clear();
    navigation("/");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="200" height="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
              <Link className="nav-link" to="/about">
                Despre noi
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/speakers" ? "active" : ""}`}>
              <Link className="nav-link" to="/speakers">
                Vorbitori
              </Link>
            </li>
          

            <li
              className={`nav-item ${
                location.pathname === "/team" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/team">
                Echipa
              </Link>
            </li>
           
            <li
              className={`nav-item ${
                location.pathname === "/sponsors" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/sponsors">
                Sponsori
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
           
            <li
  className={`nav-item ${
    location.pathname === "https://forms.gle/6LjW2bPviRRWo4J38" ? "active" : ""
  }`}
>
  <a
    href="https://forms.gle/6LjW2bPviRRWo4J38"
    className={`nav-link btn custom-button ${isSoldOut || isLoggedIn ? "disabled-link" : ""}`}
    style={{ visibility: isLoggedIn ? "hidden" : "visible" }}
  >
    {isSoldOut ? "SOLD OUT" : "BILETE"}
  </a>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
