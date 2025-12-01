// src/components/RoadmapSection.tsx

const RoadmapSection = () => {
  return (
    <section className="section section--tighter">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-eyebrow">Vision & roadmap</div>
            <h2 className="heading-lg">
              Une v1 claire, une ambition long terme assumée.
            </h2>
          </div>
          <p className="text-sm">
            La première version reste volontairement ciblée : 75%, mécanique,
            filaire, E-Ink, logiciel desktop. Le but : un outil fiable qui
            couvre déjà l’essentiel du workflow créatif.
          </p>
        </div>

        <div className="grid-3">
          <div className="card">
            <h3 className="heading-md">v1 — Base solide</h3>
            <p className="text-sm" style={{ marginTop: "0.6rem" }}>
              Clavier 75% mécanique, base aluminium, keycaps E-Ink, logiciel
              dédié desktop, profils par application, macros, gestion RGB,
              mises à jour firmware.
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md">v1.x — Affinage créatif</h3>
            <p className="text-sm" style={{ marginTop: "0.6rem" }}>
              Presets pour les principaux logiciels créatifs, partage de
              layouts, amélioration de l’éditeur de macros, intégrations plus
              profondes selon la demande.
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md">Suite — Gammes & plateformes</h3>
            <p className="text-sm" style={{ marginTop: "0.6rem" }}>
              Modèles plus fins, versions sans fil, formats alternatifs, support
              mobile plus poussé pour certains cas d’usage avancés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
