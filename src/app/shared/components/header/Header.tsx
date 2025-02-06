"use client";

import React, { useState } from 'react';
import '@/app/shared/components/header/header.scss';
import Sidebar from '@/app/shared/components/sidebar/Sidebar'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header >
      <nav className="nav-container">

        <div className="header-container">
          <span className="navLink">
            <a href="#">location</a>
          </span>

          {/* Burger Icon for Mobile */}
          <div className="burger" onClick={toggleMenu}>
            <div className="thinLine"></div>
            <div className="line"></div>
            <div className="thinLine"></div>
          </div>
          {/* Logo Section */}
          <div className="icon_container">
            <img src="/assets/images/brolickLogo.png" alt="icon" className="logo" />
            <img src="/assets/images/brolickTitle.png" alt="icon" className="title" />
          </div>

          <div className="nav-link_button">
              <a href="#">Member Login</a>

            <a href="#" className="cta">
              <button>Join Now</button>
            </a>
          </div>


        </div>

        {/* Sidebar Component */}
        <Sidebar isOpen={menuOpen} onClose={closeMenu} />
      </nav>
    </header>
  );
};

export default Header;
