// src/components/HowItWorksSection.tsx

const HowItWorksSection = () => {
  return (
    <section className="section section--tighter howitworks-section-background">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-eyebrow">Comment ça marche</div>
            <h2 className="heading-lg">
              Du layout figé au clavier qui suit chaque workflow.
            </h2>
          </div>
          <p className="text-sm">
            Le logiciel dédié gère tes layouts, macros, profils d’applications
            et mises à jour firmware. L’objectif : que tout soit configurable,
            sans perdre de temps dans des menus obscurs.
          </p>
        </div>

        <div className="steps">
          <div className="card">
            <div className="step-number">Étape 1</div>
            <h3 className="heading-md">Choisis ton workflow</h3>
            <p className="text-sm">
              Montage, live, design, écriture… Tu crées un profil par usage ou
              par projet, lié à une ou plusieurs applications.
            </p>
          </div>

          <div className="card">
            <div className="step-number">Étape 2</div>
            <h3 className="heading-md">Configure les touches visuellement</h3>
            <p className="text-sm">
              Chaque keycap E-Ink reçoit une fonction, une macro, une icône. Tu
              vois ton clavier à l’écran, tu glisses les actions là où tu les
              veux.
            </p>
          </div>

          <div className="card">
            <div className="step-number">Étape 3</div>
            <h3 className="heading-md">Bascule, crée, répète</h3>
            <p className="text-sm">
              Tu changes de projet ou d’app : le clavier bascule. Tes layouts
              restent cohérents, ta mémoire musculaire suit, ta création ne
              s’arrête pas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
