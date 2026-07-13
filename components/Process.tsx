const STEPS = [
  { title: "Simulation en ligne", desc: "Vous renseignez votre facture actuelle et vos coordonnées en moins d'une minute." },
  { title: "Rappel sous 24h", desc: "Un conseiller vous appelle pour affiner votre projet et vérifier votre éligibilité aux aides." },
  { title: "Visite technique", desc: "Un technicien se déplace gratuitement chez vous pour évaluer la faisabilité et prendre les mesures." },
  { title: "Devis détaillé", desc: "Vous recevez un chiffrage précis, sans engagement, intégrant les aides auxquelles vous avez droit." },
  { title: "Installation & suivi", desc: "Pose par nos artisans certifiés, mise en service, et suivi après travaux." },
];

export default function Process() {
  return (
    <div className="process-wrap" id="etapes">
      <div className="wrap" style={{ padding: "96px 24px" }}>
        <div className="section-head" style={{ maxWidth: 600 }}>
          <span className="eyebrow-dark" style={{ color: "var(--ember-500)" }}>
            Comment ça marche
          </span>
          <h2 style={{ color: "#fff" }}>De la simulation à l&apos;installation, en 5 étapes</h2>
        </div>
        <div className="process">
          {STEPS.map((step, i) => (
            <div className="process-step" key={step.title}>
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
