import { useState } from 'react';

 function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="section">
      <h3>Sobre mí</h3>
      <p className="about-text">
        Soy estudiante de la UTN y actualmente estoy aprendiendo programación,
        con foco en JavaScript y React. Me interesa el desarrollo web y crear
        experiencias digitales claras y útiles.
      </p>

      {mostrarMas && (
        <p className="about-extra">
          Mi objetivo profesional es seguir formándome como desarrollador y
          ganar experiencia construyendo proyectos. En este recorrido estoy
          profundizando en el flujo de datos, las props y el manejo del estado
          con hooks.
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