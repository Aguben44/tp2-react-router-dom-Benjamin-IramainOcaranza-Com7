
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/contact.jsx';
import './App.css';

function App() {
  const misHabilidades = ['JavaScript', 'React', 'Git', 'HTML5', 'CSS3', 'Vite'];
  const misProyectos = [
    {
      id: 1,
      titulo: 'Portfolio TP1',
      descripcion: 'Portafolio personal creado para el TP1.',
      detalles: 'Una SPA desarrollada en React y Vite para reunir mis proyectos y habilidades.'
    },
    {
      id: 2,
      titulo: 'Portfolio Multipágina',
      descripcion: 'Una versión del portafolio con navegación por rutas.',
      detalles: 'Evoluciona el TP1 usando React Router DOM para separar cada sección en una página.'
    },
    {
      id: 3,
      titulo: 'Sistema de gestión de llamadas',
      descripcion: 'Sistema de gestión para call center.',
      detalles: 'Organiza llamadas entrantes y salientes e incorpora transcripción con IA.'
    }
  ];

  return (
    <div className="app-container">
      {/* Menú lateral fijo (30%) */}
      <aside className="sidebar">
        <Sidebar />
      </aside>

      {/* Área principal dinámica (70%) */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills habilidades={misHabilidades} />} />
          <Route path="/projects" element={<Projects proyectos={misProyectos} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;