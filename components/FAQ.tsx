"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Suis-je éligible aux aides de l'État ?",
    a: "L'éligibilité à MaPrimeRénov', aux Certificats d'Économies d'Énergie (CEE) ou à l'éco-PTZ dépend de vos revenus, du type de logement et des travaux envisagés. Un conseiller vérifie votre situation lors de l'appel de qualification, sans engagement.",
  },
  {
    q: "Combien de temps prend une installation ?",
    a: "Comptez généralement 1 à 3 jours pour une pompe à chaleur, 1 à 2 jours pour des panneaux photovoltaïques, et 1 jour pour l'isolation de combles perdus. Le délai exact dépend de la configuration du logement.",
  },
  {
    q: "La visite technique est-elle vraiment gratuite ?",
    a: "Oui. La visite de faisabilité et le devis qui en découle sont gratuits et sans engagement de votre part.",
  },
  {
    q: "Puis-je combiner plusieurs travaux ?",
    a: "Oui, c'est même recommandé : isoler avant d'installer une pompe à chaleur permet souvent de dimensionner un équipement plus petit, donc moins coûteux à l'achat et à l'usage.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow-dark">Questions fréquentes</span>
          <h2>Avant d&apos;être rappelé, quelques réponses</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq-item" data-open={isOpen} key={item.q}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="plus"></span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? "240px" : undefined }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
