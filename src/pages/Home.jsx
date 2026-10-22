import { Link } from 'react-router-dom';

function Home() {
	return (
		<section className="home">
			<p className="home-eyebrow">Estudiante de programacion · UTN</p>
			<h1>Hola, soy <span>Benjamin</span></h1>
			<p className="home-intro">
				Estoy aprendiendo JavaScript y React, y en este espacio comparto mis
				proyectos y todo lo que voy construyendo en el camino.
			</p>
			<div className="home-actions">
				<Link className="home-link home-link-primary" to="/projects">Ver mis proyectos</Link>
				<Link className="home-link" to="/skills">Explorar habilidades</Link>
			</div>
			<p className="home-note">
				Un portafolio hecho con React y React Router para reunir mis trabajos y
				tecnologías en un solo lugar.
			</p>
		</section>
	);
}

export default Home