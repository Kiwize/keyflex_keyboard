const PersonaSection = () => {
  return (
    <section className="section section--tighter">
      <div className="container persona-layout">

        {/* Colonne texte */}
        <div>

          <div className="persona-pill">
            <span>Pour ceux qui créent, conçoivent, développent</span>
          </div>

          <h2 className="heading-lg">
            Un clavier qui s’adapte à ton métier.
            <br />
            À ton logiciel. À ton flow.
          </h2>

          <p className="text-base">
            Le clavier devient un outil vivant : il change selon ton rôle, ton 
            application et ton moment de la journée. Un seul outil, plusieurs 
            métiers.
          </p>

          {/* Liste des métiers par icône */}
          <div className="persona-checklist">

            <div className="persona-check">
              🎬 <strong>Monteurs</strong> – timeline, playback, cut, markers.
            </div>

            <div className="persona-check">
              📡 <strong>Streamers</strong> – scènes, audio, transitions, OBS.
            </div>

            <div className="persona-check">
              🎨 <strong>Designers & graphistes</strong> – brushes, layers, outils.
            </div>

            <div className="persona-check">
              💻 <strong>Développeurs</strong> – snippets, build, navigation, Git.
            </div>

            <div className="persona-check">
              ✍️ <strong>Rédacteurs</strong> – commandes d’édition, structure, focus.
            </div>

            <div className="persona-check">
              📊 <strong>Analystes & power users</strong> – macros, scripts, automatisations.
            </div>

          </div>
        </div>

        {/* Carte journée type */}
        <div className="card">
          <h3 className="heading-md">Exemple de journée type</h3>

          <p className="text-sm" style={{ marginTop: "0.8rem" }}>
            Matin : développement → touches Git, build, navigation.
            <br />
            Après-midi : montage vidéo → cut, ripple, playback.
            <br />
            Soir : création ou rédaction → layout simplifié, outils essentiels.
          </p>

          <p className="text-sm" style={{ marginTop: "1.2rem" }}>
            Le clavier suit ton workflow, tu restes concentré sur ce que tu crées.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PersonaSection;
