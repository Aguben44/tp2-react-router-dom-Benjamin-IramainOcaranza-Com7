function Projects({ proyectos }) {
  return (
    <section className="section">
      <h3>Mis Proyectos</h3>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="project-card">
            <h4>{proyecto.titulo}</h4>
            <p>{proyecto.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects