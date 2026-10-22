import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar-nav">
      <h2>Mi portafolio</h2>
      <ul>
        <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>Sobre mí</NavLink></li>
        <li><NavLink to="/skills" className={({isActive}) => isActive ? "active" : ""}>Habilidades</NavLink></li>
        <li><NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Proyectos</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink></li>
      </ul>
    </nav>
  );
}

export default Sidebar;