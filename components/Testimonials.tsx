const TESTIMONIALS = [
  {
    quote:
      "Le technicien est venu rapidement, a tout expliqué clairement, et le devis correspondait exactement à ce qui avait été annoncé au téléphone.",
    initial: "M.",
    name: "Marc D.",
    loc: "Propriétaire, Rennes",
  },
  {
    quote:
      "Notre facture de chauffage a nettement baissé dès le premier hiver après le passage à la pompe à chaleur. Installation propre et rapide.",
    initial: "S.",
    name: "Sophie L.",
    loc: "Propriétaire, Nantes",
  },
  {
    quote:
      "Isolation des combles puis panneaux solaires l'année suivante : à chaque étape, un vrai accompagnement et des explications sans jargon.",
    initial: "P.",
    name: "Pierre A.",
    loc: "Propriétaire, Angers",
  },
];

export default function Testimonials() {
  return (
    <section id="avis">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow-dark">Avis clients</span>
          <h2>Ce que racontent ceux qui ont déjà passé le cap</h2>
          <p>
            Témoignages illustratifs représentatifs des retours clients types — à remplacer par
            vos propres avis vérifiés (Google, Trustpilot…) avant mise en ligne.
          </p>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="stars">★★★★★</div>
              <p className="quote">{t.quote}</p>
              <div className="testi-who">
                <div className="avatar">{t.initial}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
