function Skills({habilidades}) {


return (
    <section className="section">
      <h3>Habilidades y Tecnologías</h3>
      <ul className="skills-list">
        {habilidades.map((skill, index) => (
          <li key={index} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );

}




export default Skills