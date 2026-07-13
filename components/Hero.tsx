import Simulator from "./Simulator";

export default function Hero() {
  return (
    <section className="hero">
      <svg className="hero-isotherms" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="iso1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1B4863" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8A33D" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1B4863" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-100 620 C 250 560, 450 680, 800 560 S 1250 500 1350 560" stroke="url(#iso1)" strokeWidth="2" fill="none" />
        <path d="M-100 660 C 250 600, 450 720, 800 600 S 1250 540 1350 600" stroke="url(#iso1)" strokeWidth="1.4" fill="none" opacity=".7" />
        <path d="M-100 580 C 250 520, 450 640, 800 520 S 1250 460 1350 520" stroke="url(#iso1)" strokeWidth="1.2" fill="none" opacity=".5" />
      </svg>

      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot"></span> MaPrimeRénov&apos; · CEE · Éco-PTZ
          </span>
          <h1>
            Votre maison passe au chaud, <em>votre facture</em> passe au froid.
          </h1>
          <p className="lede">
            Pompe à chaleur, panneaux photovoltaïques, isolation : un seul interlocuteur pour
            estimer vos travaux, vérifier vos aides et planifier la visite d&apos;un technicien
            près de chez vous.
          </p>
          <div className="hero-cta-row">
            <a href="#lead-form" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Être rappelé gratuitement
            </a>
            <a href="#services" className="btn btn-ghost">
              Découvrir les solutions
            </a>
          </div>
          <div className="trust-mini">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Devis &amp; visite technique gratuits
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Artisans certifiés RGE
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Rappel sous 24h ouvrées
            </span>
          </div>
        </div>

        <Simulator />
      </div>
    </section>
  );
}
