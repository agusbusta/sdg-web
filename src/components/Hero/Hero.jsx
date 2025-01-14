import React from 'react';
import './Hero.css';
import Carousel from '../Carousel/Carousel';

function Hero() {
  return (
    <section className="hero">
      <div className="event-banner">
        <div className="banner-content">
          <div className="title">COPA DESAFIO</div>
          <div className="logos">
            <img src={`${process.env.PUBLIC_URL}/logo-copa-desafio.png`} alt="Copa Logo" className="copa-logo" />
            <span className="vs">X</span>
            <img src={`${process.env.PUBLIC_URL}/temperley.png`} alt="CAT Logo" className="cat-logo" />
          </div>
          <div className="event-info">
            <div className="dates">20 21 22<br/>ABRIL</div>
            <div className="location">
              PREDIO DEPORTIVO, CLUB ATLETICO<br/>
              TEMPERLEY<br/>
              LOMAS DE ZAMORA, BUENOS AIRES,<br/>
              ARGENTINA
            </div>
          </div>
        </div>
      </div>
      <div className="hero-carousel-container">
        <Carousel />
      </div>
    </section>
  );
}

export default Hero; 