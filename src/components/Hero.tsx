// src/components/Hero.tsx

const Hero = () => {
  return (
    <section className="hero section hero-section-background">
      <div className="container hero-layout">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Clavier créatif à keycaps dynamiques</span>
          </div>
          <h1 className="heading-xl hero-title">
            Le clavier qui suit chaque idée,
            <br />
            pas l’inverse.
          </h1>
          <p className="text-base hero-subtitle">
            Layouts E-Ink dynamiques, macros visuelles et personnalisation
            totale. Conçu pour les créateurs qui changent d’outil comme
            d’inspiration.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              Rejoindre la liste d’attente
            </button>
            <button className="btn btn-ghost">
              Voir comment il fonctionne
            </button>
          </div>

          <div className="hero-label">Pensé pour les créateurs de contenu.</div>
        </div>

        <div className="hero-preview" aria-hidden>
          <div className="hero-preview-inner">
            <div className="keyboard-row">
              <div className="keycap">
                <span className="keycap-label">Cut</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Ripple</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Play</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Marker</span>
              </div>
            </div>

            <div className="keyboard-row">
              <div className="keycap">
                <span className="keycap-label">Scene</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Cam</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Mute</span>
              </div>
              <div className="keycap keycap-layout-switch">
                <span className="keycap-label">Layout</span>
              </div>
            </div>

            <div className="keyboard-row">
              <div className="keycap">
                <span className="keycap-label">Brush</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Layers</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Export</span>
              </div>
              <div className="keycap">
                <span className="keycap-label">Undo</span>
              </div>
            </div>

            <div className="hero-preview-footer">
              <div className="hero-preview-pill">
                Layout vidéo → Layout stream → Layout design
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(242,242,242,0.7)",
                }}
              >
                Keycaps E-Ink 75% • Base aluminium
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
