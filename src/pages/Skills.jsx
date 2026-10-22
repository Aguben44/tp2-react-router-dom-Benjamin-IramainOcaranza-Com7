function Skills({habilidades}) {


return (
    <section className="section">
      <h3>Habilidades y Tecnologías</h3>
      <div className="skills-grid">
        {habilidades.map((skill) => (
          <article key={skill} className="skill-card">
            {skill}
          </article>
        ))}
      </div>
    </section>
  );

}




export default Skills