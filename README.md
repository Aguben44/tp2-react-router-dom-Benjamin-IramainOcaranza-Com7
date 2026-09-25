# Trabajo Práctico Nº 1 - Portfolio en React

**Universidad Tecnológica Nacional – Facultad Regional Tucumán**  
**Materia:** Programación  
**Estudiante:** Benjamín Iramain Caranza  
**Comisión:** 7  

---

## Descripción del proyecto
Este proyecto es una aplicación web (SPA) desarrollada para el Trabajo Práctico Nº 1. Consiste en un portfolio personal creado con React y Vite donde se implementaron los conceptos fundamentales de la cursada:

- Creación y separación de la interfaz en componentes funcionales propios.
- Comunicación entre componentes utilizando **props**.
- Renderizado dinámico de listas a partir de arrays mediante el método `.map()`, asignando a cada elemento una propiedad `key` única.
- Manejo de estado interactivo utilizando el hook **`useState`** y eventos `onClick` para renderizado condicional (botón "Ver más / Ver menos").
- Maquetado responsive y ordenado utilizando CSS estándar.

---

## Tecnologías utilizadas
- React
- Vite
- JavaScript (JSX)
- CSS3
- Git y GitHub

---

## Componentes del portfolio
La aplicación está organizada en la carpeta `src/components/`:
- **Header:** Recibe el nombre y rol profesional mediante props.
- **Hero:** Sección inicial de presentación y bienvenida.
- **About:** Sección sobre mí que utiliza un estado con `useState` para alternar la visibilidad de información adicional al presionar un botón.
- **Skills:** Recibe un array de habilidades por props y las dibuja usando `.map()`.
- **Projects:** Recibe un array de objetos con proyectos y los muestra en tarjetas mediante `.map()` y `key`.
- **Footer:** Pie de página con enlace de correo recibido mediante props.

---

##  Instrucciones para correr el proyecto localmente

Para clonar y probar la aplicación en tu computadora:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Aguben44/tp1-react-portafolio-benjamin-iramainocaranza]


Entrar en la carpeta del proyecto:

Bash
cd tp1-react-portafolio-benjamin-iramainocaranza


Instalar las dependencias necesarias:
Bash

npm install


Ejecutar el entorno de desarrollo:
Bash

npm run dev
Abrir en el navegador la dirección local que muestra la terminal (usualmente http://localhost:5173/).