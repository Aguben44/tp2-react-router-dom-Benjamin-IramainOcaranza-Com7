import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
 
  const misHabilidades = ['C#', 'git', 'JavaScript', 'React', 'HTML', 'CSS',];

  const misProyectos = [{
id: 1,
titulo: 'Sistema automatizado de callcenter',
descripcion: 'sistema mejorado de llamadas usando asistente de inteligencia artificial'
},

{
  id: 2,
  titulo: "sistema de registro de turnos para barberia",
  descripcion: 'registro de turnos para una barberia que toma datos de, hora, precio, y peluquero'
}

]

  return (


 <main className="portfolio-container">
      <Header nombre="Benjamin Ocaranza" profesion="Estudiante de Programación" />
      <Hero />
      <About />
      <Skills habilidades={misHabilidades} />
      <Projects proyectos={misProyectos} />
      <Footer contacto="benja.a.ocaranza@gmail.com" />
    </main>

  )
}

export default App
