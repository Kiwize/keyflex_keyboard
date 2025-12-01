// src/components/CtaSection.tsx
import { type FormEvent, useState } from "react";
import Footer from "./Footer";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Hook pour futur backend ou outil de mailing.
    // Pour l’instant : on simule juste la prise en compte.
    if (!email.trim()) return;
    setStatus("done");
  };

  return (
    <section className="section section--tighter" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-layout">
            <div>
              <div className="section-eyebrow">Mailing list</div>
              <h2 className="heading-lg">
                Soit dans les premier à tester le clavier KeyFlex.
              </h2>
              <p className="text-sm" style={{ marginTop: "0.6rem" }}>
                Inscris-toi pour suivre l’avancement, les premiers prototypes,
                et les ouvertures de test en priorité. Pas de spam, uniquement
                les étapes importantes.
              </p>
            </div>

            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="cta-input"
                placeholder="ton.email@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">
                {status === "done" ? "Inscription prise en compte" : "Rejoindre la liste d’attente"}
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default CtaSection;
