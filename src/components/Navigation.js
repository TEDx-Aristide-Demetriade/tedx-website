import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Add more public page links here */}
      </ul>
    </nav>
  );
};

export default Navigation;
