// src/components/PersonaSection.tsx

const PersonaSection = () => {
  return (
    <section className="section section--tighter">
      <div className="container persona-layout">
        <div>
          <div className="persona-pill">
            <span>Pour les créateurs de contenu</span>
          </div>
          <h2 className="heading-lg">
            Tu crées. Tu montes. Tu streams.
            <br />
            Ton clavier doit suivre, pas freiner.
          </h2>
          <p className="text-base">
            Ce clavier est pensé pour les créateurs qui jonglent entre
            logiciels de montage, plateformes de streaming, outils graphiques
            et automation. Le layout se cale sur ton setup, pas l’inverse.
          </p>

          <div className="persona-checklist">
            <div className="persona-check">
              • Timeline, playback, markers, exports sur un layout dédié.
            </div>
            <div className="persona-check">
              • Scènes, overlays, mute, enregistrement sur un profil streaming.
            </div>
            <div className="persona-check">
              • Brushes, layers, outils sélectionnés sur ton layout design.
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="heading-md">Exemple de journée type</h3>
          <p className="text-sm" style={{ marginTop: "0.8rem" }}>
            Matin : tu montes vidéo. Chaque touche affiche les fonctions
            essentielles de ton NLE.
            <br />
            Après-midi : tu passes en live. Layout streaming, touches OBS et
            plateformes sociales.
            <br />
            Soir : retouche miniature et visuels. Layout design, outils graphiques
            et exports rapides.
          </p>
          <p className="text-sm" style={{ marginTop: "1.2rem" }}>
            Le clavier suit le projet. Tu gardes ton attention là où elle doit
            être : sur le contenu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;
