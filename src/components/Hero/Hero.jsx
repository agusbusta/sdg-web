import React from 'react';
import './Hero.css';
import Carousel from '../Carousel/Carousel';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="event-banner"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="banner-content">
          <motion.div 
            className="title"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            COPA DESAFIO
          </motion.div>
          
          <motion.div 
            className="logos"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.img 
              src={`${process.env.PUBLIC_URL}/logo-copa-desafio.png`} 
              alt="Copa Logo" 
              className="copa-logo"
              whileHover={{ scale: 1.05 }}
            />
            <span className="vs">X</span>
            <motion.img 
              src={`${process.env.PUBLIC_URL}/temperley.png`} 
              alt="CAT Logo" 
              className="cat-logo"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          <motion.div 
            className="event-info"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="dates">20 21 22<br/>ABRIL</div>
            <div className="location">
              PREDIO DEPORTIVO, CLUB ATLETICO<br/>
              TEMPERLEY<br/>
              LOMAS DE ZAMORA, BUENOS AIRES,<br/>
              ARGENTINA
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-carousel-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Carousel />
      </motion.div>
    </motion.section>
  );
}

export default Hero; 