// src/components/Hero.tsx

const Hero = () => {
  return (
    <section className="hero section hero-section-background">
      <div className="container hero-layout">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Clavier adaptif à keycaps dynamiques</span>
          </div>
          <h1 className="heading-xl hero-title">
            KeyFlex<br/>
            Le clavier qui suit chaque idée 💡,
            <br />
            pas l’inverse.
          </h1>
          <p className="text-base hero-subtitle">
            Layouts E-Ink dynamiques, macros visuelles et personnalisation
            totale. Conçu pour changer d’outil comme
            d’inspiration.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("cta");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Rejoindre la liste d’attente
            </button>
            <button className="btn btn-ghost">
              Voir comment il fonctionne
            </button>
          </div>

          <div className="hero-label">Pensé pour une polyvalence ultime.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
