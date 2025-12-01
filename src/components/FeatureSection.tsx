// src/components/FeatureSection.tsx

const FeatureSection = () => {
  return (
    <section className="section features-section-background">
      <div className="features-section-background"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-eyebrow">Fonctionnalités</div>
            <h2 className="heading-lg">
              Un clavier, plusieurs vies.<br/>
            </h2>
          </div>
          <p className="text-sm">
            Le clavier est pensé comme un outil central de ton workflow :
            layout, automation et matière sont alignés pour suivre ton rythme,
            pas celui d’un clavier figé.
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="feature-tag">Keycaps E-Ink dynamiques</div>
            <h3 className="heading-md feature-card-title">Layout vivant</h3>
            <p className="text-sm feature-body">
              Chaque touche affiche ce dont tu as besoin : raccourcis, icônes,
              outils, macros. Rien n’est figé, tout peut changer selon le
              contexte.
            </p>
            <div className="feature-meta">
              Profils par application, presets créatifs, layouts partageables.
            </div>
          </div>

          <div className="card">
            <div className="feature-tag">Macros & automatisations</div>
            <h3 className="heading-md feature-card-title">Actions en un seul geste</h3>
            <p className="text-sm feature-body">
              Enchaîne des actions complexes : lancement de scènes, exports,
              scripts, raccourcis multi-app. Externalise la friction sur les
              touches.
            </p>
            <div className="feature-meta">
              Création visuelle de macros, duplications, réutilisation par
              projets.
            </div>
          </div>

          <div className="card">
            <div className="feature-tag">Construction matérielle</div>
            <h3 className="heading-md feature-card-title">Pensé pour durer</h3>
            <p className="text-sm feature-body">
              Format 75%, keycaps plastique, port
              USB-C. <br/>Solide, dense, conçu pour rester sur ton bureau plusieurs
              années.
            </p>
            <div className="feature-meta">
              Firmware mis à jour via le logiciel, RGB discret et maîtrisé.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
