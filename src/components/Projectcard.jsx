import { useId, useState } from 'react';

function ProjectCard({ name, description, details, link }) {
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = useId();

  return (
    <article className="project-card project-card-interactive">
      <h3>{name}</h3>
      <p className="project-description">{description}</p>

      <div
        id={detailsId}
        className={`project-details${showDetails ? ' is-open' : ''}`}
        aria-hidden={!showDetails}
        inert={!showDetails}
      >
        <div className="project-details-content">
          <p className="project-details-label">Sobre el proyecto</p>
          <p>{details}</p>
          {link && <a href={link} target="_blank" rel="noopener noreferrer">Ver repositorio</a>}
        </div>
      </div>

      <button
        type="button"
        className="project-details-toggle"
        aria-expanded={showDetails}
        aria-controls={detailsId}
        onClick={() => setShowDetails(!showDetails)}
      >
        <span>{showDetails ? 'Ocultar detalles' : 'Ver más'}</span>
        <span className="project-toggle-icon" aria-hidden="true">{showDetails ? '−' : '+'}</span>
      </button>
    </article>
  );
}

export default ProjectCard;