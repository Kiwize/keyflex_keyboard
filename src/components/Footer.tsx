// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div>© {new Date().getFullYear()} — Clavier dynamique E-Ink.</div>
        <div className="footer-links">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
