import ProjectCard from '../components/Projectcard';

function Projects({ proyectos }) {
  return (
    <section className="section">
      <h3>Mis Proyectos</h3>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            name={proyecto.titulo}
            description={proyecto.descripcion}
            details={proyecto.detalles}
            link={proyecto.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects