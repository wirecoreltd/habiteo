const SERVICES = [
  {
    icon: "pac",
    title: "Pompe à chaleur",
    desc: "Air/eau ou air/air : remplacez une chaudière énergivore par un système qui restitue jusqu'à 4 fois plus d'énergie qu'il n'en consomme.",
    tags: ["Chauffage", "Eau chaude", "Silencieux"],
  },
  {
    icon: "solar",
    title: "Panneaux photovoltaïques",
    desc: "Produisez votre propre électricité, consommez-la en priorité et revendez le surplus. Un investissement qui s'amortit et se valorise dans le temps.",
    tags: ["Autoconsommation", "Revente", "25 ans"],
  },
  {
    icon: "iso",
    title: "Isolation thermique",
    desc: "Combles, murs, planchers bas : la première dépense énergétique évitée est celle qui ne s'échappe plus par une paroi mal isolée.",
    tags: ["Combles", "Murs", "Confort d'été"],
  },
];

function ServiceIcon({ type }: { type: string }) {
  if (type === "pac") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
  if (type === "solar") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow-dark">Nos solutions</span>
          <h2>Trois leviers, un seul objectif : moins dépenser, mieux vivre</h2>
          <p>
            Nos techniciens étudient votre logement dans sa globalité pour vous proposer la
            combinaison la plus rentable, sans vous vendre ce dont vous n&apos;avez pas besoin.
          </p>
        </div>

        <div className="services">
          {SERVICES.map((s) => (
            <article className="service-card" key={s.title}>
              <div className={`service-icon icon-${s.icon}`}>
                <ServiceIcon type={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
