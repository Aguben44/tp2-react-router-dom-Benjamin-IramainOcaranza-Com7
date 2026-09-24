function Footer({ contacto }) {
  return (
    <footer className="footer">
      <p>
        Contacto: <a href={`mailto:${contacto}`}>{contacto}</a>
      </p>
      <small>© 2026 - Trabajo Práctico Nº 1 - UTN FRT</small>
    </footer>
  );
}

export default Footer;