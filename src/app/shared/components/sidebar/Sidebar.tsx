"use client";

import React from 'react';
import '@/app/shared/components/sidebar/sidebar.css';

interface SidebarProps {
  isOpen: boolean; // Controls whether the sidebar is visible
  onClose: () => void; // Function to close the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      {/* Close Button */}
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>

      {/* Navigation Links */}
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#" onClick={onClose}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={onClose}>
              Payment
            </a>
          </li>
          <li>
            <a href="#" onClick={onClose}>
              Dashboard
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <a href="#" className="cta">
        <button onClick={onClose}>Contact</button>
      </a>
    </div>
  );
};

export default Sidebar;
