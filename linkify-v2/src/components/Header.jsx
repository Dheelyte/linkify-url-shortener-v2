import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'About', path: '/about' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo-container">
            <img src="/vite.svg" alt="Company Logo" className="logo-img" />
            <span className="brand-name">Linkify</span>
        </a>
      </div>
    </header>
  );
};

export default Header;