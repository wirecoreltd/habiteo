export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">
              <svg className="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="15" stroke="#E8A33D" strokeWidth="2" />
                <path d="M16 6 L16 16 L23 20" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Solvéo Habitat
            </div>
            <p>
              Pompe à chaleur, photovoltaïque et isolation. Un accompagnement de la simulation à
              l&apos;installation, partout en France.
            </p>
          </div>
          <div className="foot-col">
            <h4>Solutions</h4>
            <ul>
              <li>Pompe à chaleur</li>
              <li>Photovoltaïque</li>
              <li>Isolation</li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Entreprise</h4>
            <ul>
              <li>Certifications RGE</li>
              <li>Zones d&apos;intervention</li>
              <li>Avis clients</li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li className="mono">01 00 00 00 00</li>
              <li>contact@solveo-habitat.fr</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Solvéo Habitat — Nom fictif, à remplacer par votre raison sociale.</span>
          <span>Mentions légales · Politique de confidentialité · CGU</span>
        </div>
      </div>
    </footer>
  );
}
