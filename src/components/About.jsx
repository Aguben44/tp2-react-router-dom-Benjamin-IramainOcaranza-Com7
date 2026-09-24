import { useState } from 'react';

 function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="section">
      <h3>Sobre mí</h3>
      <p className="about-text">
        Soy estudiante universitario apasionado por la tecnología, el desarrollo de software y el aprendizaje de nuevas herramientas.
      </p>

      {mostrarMas && (
        <p className="about-extra">
          Actualmente me encuentro profundizando en el ecosistema de JavaScript y React, comprendiendo el flujo de datos unidireccional, el manejo de props y el ciclo de vida del estado con hooks.
        </p>
      )}

      <button 
        className="btn-toggle"
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  );
}

export default About;