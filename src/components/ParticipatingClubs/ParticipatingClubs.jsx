import React from 'react';
import './ParticipatingClubs.css';

function ParticipatingClubs() {
  const clubs = [
    { name: 'Club 1', logo: `${process.env.PUBLIC_URL}/temperley.png` },
    { name: 'Club 3', logo: `${process.env.PUBLIC_URL}/river.png` },
    { name: 'Club 2', logo: `${process.env.PUBLIC_URL}/inter-miami.png` },
    { name: 'Club 4', logo: `${process.env.PUBLIC_URL}/flamengo.png` },
    { name: 'Club 5', logo: `${process.env.PUBLIC_URL}/corinthians.png` },
  ];

  return (
    <section className="clubs">
      <h2>CLUBES PARTICIPANTES</h2>
      <div className="clubs-grid">
        {clubs.map((club, index) => (
          <div key={index} className="club-logo">
            <img src={club.logo} alt={club.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ParticipatingClubs; 