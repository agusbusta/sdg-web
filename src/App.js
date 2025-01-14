import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import ParticipatingClubs from './components/ParticipatingClubs/ParticipatingClubs';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/FAQ';
import Legal from './components/Legal/Legal';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/preguntas" element={<FAQ />} />
          <Route path="/legales" element={<Legal />} />
          <Route path="/" element={
            <>
              <Hero />
              <ParticipatingClubs />
              <AboutSection />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
