import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={handleNavClick}>
            <img src={`${process.env.PUBLIC_URL}/logo-b.png`} alt="Logo" />
            <p>Sueños de gol</p>
          </Link>
        </div>
        
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleNavClick}>INICIO</Link>
          <Link to="/galeria" onClick={handleNavClick}>GALERÍA</Link>
          <Link to="/preguntas" onClick={handleNavClick}>PREGUNTAS FRECUENTES</Link>
          <Link to="/legales" onClick={handleNavClick}>LEGALES</Link>
          <Link to="/registro" className="register-button" onClick={handleNavClick}>INSCRIBIRSE</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header; 