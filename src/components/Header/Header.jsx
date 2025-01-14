import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo-b.png`} alt="Logo" /> <p>Sueños de gol</p>
        </div>
        <nav className="nav-menu">
          <a href="#inicio">INICIO</a>
          <a href="#galeria">GALERÍA</a>
          <a href="#preguntas">PREGUNTAS FRECUENTES</a>
          <a href="#legales">LEGALES</a>
          <a href="#registro" className="register-button">INSCRIBIRSE</a>
        </nav>
      </div>
    </header>
  );
}

export default Header; 