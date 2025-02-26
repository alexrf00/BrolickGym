"use client";

import React from 'react';
import '@/app/shared/components/sidebar/sidebar.scss';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean; // Controls whether the sidebar is visible
  onClose: () => void; // Function to close the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>

      {/* Logo Section */}
      <div className="icon_container">
      <Image src="/assets/images/brolickLogoRotate.png" alt="icon" objectFit='contain' width={50} height={30} className="logo" />
      <Image src="/assets/images/brolickTitleRotate.png" alt="icon" objectFit='contain'  width={80} height={30} className="title" />
      </div>
      <div className="sidebar-sub-container">
        <div className="button-container">
          <div className="user-buttons">
          {/* User Button */}
          <a href="#" className="freeTrial">
            <button onClick={onClose}>Free Trial</button>
          </a>
          <a href="#" className="joinButton">
            <button onClick={onClose}>Join Now</button>
          </a>
          </div>
          {/* Close Button */}
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#" onClick={onClose}>
                Location
              </a>
            </li>
            <li>
              <a href="#" onClick={onClose}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={onClose}>
                Member Login
              </a>
            </li>
          </ul>
        </nav>


      </div>
    </div>
  );
};

export default Sidebar;
