"use client";

import React, { useState } from 'react';
import '@/app/shared/components/header/header.scss';
import SideBar from '@/app/shared/components/sideBar/SideBar';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
      <nav className="nav-container">
        <div className="header-container">
          <span className="navLink">
            <a href="#">Location</a>
            <a href="#">Blog</a>
          </span>

          {/* Burger Icon for Mobile */}
          <div className="burger" onClick={toggleMenu}>
            <div className="thinLine"></div>
            <div className="line"></div>
            <div className="thinLine"></div>
          </div>
          {/* Logo Section */}
          <div className="icon_container">
            <Image src="/assets/images/brolickLogo.png" alt="icon" objectFit='contain' width={50} height={30} className="logo" />
            <Image src="/assets/images/brolickTitle.png" alt="icon" objectFit='contain'  width={80} height={30} className="title" />
          </div>

          <div className="nav-link_button">
            <a href="#">Member Login</a>

            <a href="#" className="cta">
              <button>Join Now</button>
            </a>
          </div>
        </div>

        {/* Sidebar Component */}
        <SideBar isOpen={menuOpen} onClose={closeMenu} />
      </nav>
  );
};

export default Header;
