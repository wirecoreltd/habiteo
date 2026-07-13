export default function Header() {
  return (
    <header>
      <div className="nav wrap">
        <div className="logo">
          <svg className="logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="16" cy="16" r="15" stroke="#E8A33D" strokeWidth="2" />
            <path d="M16 6 L16 16 L23 20" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Solvéo Habitat
        </div>
        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#services">Nos solutions</a>
          <a href="#etapes">Comment ça marche</a>
          <a href="#avis">Avis clients</a>
          <a href="#faq">Questions</a>
        </nav>
        <a className="nav-phone" href="tel:0100000000">
          <span className="mono">01 00 00 00 00</span>
        </a>
      </div>
    </header>
  );
}
