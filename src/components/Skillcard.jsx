function SkillCard({ name, level }) {
  return (
    <div className="skill-card">
      <h4>{name}</h4>
      <p>Nivel: {level}</p>
    </div>
  );
}

export default SkillCard;