import LeadForm from "./LeadForm";

export default function CtaSection() {
  return (
    <section className="cta-wrap" id="lead-form">
      <div className="wrap cta-grid">
        <div>
          <span className="eyebrow">
            <span className="dot"></span> Sans engagement
          </span>
          <h2>Parlons de votre projet</h2>
          <p className="lede">
            Laissez vos coordonnées : un conseiller vous rappelle sous 24h ouvrées pour qualifier
            votre demande, puis planifie la visite gratuite d&apos;un technicien.
          </p>
          <ul className="cta-points">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Aucun paiement à cette étape
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Vérification de vos aides potentielles
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Visite technique par un professionnel certifié
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Devis détaillé sous 48h après la visite
            </li>
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
