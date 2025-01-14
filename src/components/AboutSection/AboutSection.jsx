import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-item">
          <h3>Quiénes Somos?</h3>
          <p>
            Somos apasionados por el deporte y la competencia, dedicados a
            organizar un torneo que celebra el talento, la dedicación y el trabajo en
            equipo. Nuestro evento reúne a jugadores, entrenadores y aficionados
            para vivir experiencias únicas dentro y fuera del campo.
          </p>
        </div>
        
        <div className="about-item">
          <h3>Nuestra Misión</h3>
          <p>
            Fomentar el espíritu deportivo creando un espacio donde los atletas
            puedan demostrar su potencial, los equipos crezcan y la comunidad se
            una en torno al amor por el deporte.
          </p>
        </div>
        
        <div className="about-item">
          <h3>Nuestro Compromiso</h3>
          <p>
            Estamos comprometidos a mejorar continuamente, escuchando a nuestra
            comunidad y aplicando las mejores prácticas en cada edición. Cada
            jugador, equipo y aficionado que participa es parte esencial de nuestra
            historia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 