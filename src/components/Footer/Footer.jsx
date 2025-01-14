import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Accesos útiles</h4>
          <ul>
            <li><a href="#registro">Registro</a></li>
            <li><a href="#quienes-somos">Quienes Somos?</a></li>
            <li><a href="#torneos">Torneos</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Organizador: Lavigne Maximiliano</p>
          <p>Tel: 999-4138503</p>
          <p>mkempresarial@hotmail.com</p>
          <p>Organizador: Zuñiga Ariel</p>
          <p>Tel: 2920-286867</p>
          <p>ariel.a.zuniga@hotmail.com</p>
        </div>
        
        <div className="footer-section">
          <h4>Contenidos</h4>
          <ul>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#reportajes">Reportajes</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="#facebook">Logo Facebook</a></li>
            <li><a href="#instagram">Logo Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 