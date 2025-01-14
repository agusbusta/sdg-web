import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ParticipatingClubs from './components/ParticipatingClubs/ParticipatingClubs';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ParticipatingClubs />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
