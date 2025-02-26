"use client";

import React, { ReactNode, useState } from 'react';
import '@/app/shared/components/header/header.scss';
import Sidebar from '@/app/shared/components/sidebar/Sidebar';
import Image from 'next/image';

interface HeroContentProps {
    callToActionButton: ReactNode
  }
export default function Header({ callToActionButton }: HeroContentProps) {
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
              {callToActionButton}
              {/* <button className='cta'>Join Now</button> */}
          </div>
        </div>

        {/* Sidebar Component */}
        <Sidebar isOpen={menuOpen} onClose={closeMenu} />
      </nav>
  );
};
