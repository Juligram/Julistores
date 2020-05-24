import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav">
          <div className="Container">
             <div className="main active content">
                 Home
             </div>
             <div className="classes content">
                 Categories
             </div>
             <div className="services content">
                 Our Services
             </div>
             <div className="Login content">
                Login
             </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
