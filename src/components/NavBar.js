import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/drawings">Drawings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
