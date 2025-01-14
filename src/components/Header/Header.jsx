import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo-b.png`} alt="Logo" /> 
          <p>Sueños de gol</p>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={toggleMenu}>INICIO</a>
          <a href="#galeria" onClick={toggleMenu}>GALERÍA</a>
          <a href="#preguntas" onClick={toggleMenu}>PREGUNTAS FRECUENTES</a>
          <a href="#legales" onClick={toggleMenu}>LEGALES</a>
          <a href="#registro" className="register-button" onClick={toggleMenu}>INSCRIBIRSE</a>
        </nav>
      </div>
    </header>
  );
}

export default Header; 