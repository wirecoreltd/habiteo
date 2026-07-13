"use client";

import { useState, useMemo } from "react";

type EnergyKey = "electrique" | "fioul" | "gaz";

const ENERGY_FACTORS: Record<EnergyKey, number> = {
  electrique: 0.35,
  fioul: 0.55,
  gaz: 0.45,
};

const ENERGY_LABELS: Record<EnergyKey, string> = {
  electrique: "Électrique",
  fioul: "Fioul",
  gaz: "Gaz",
};

export default function Simulator() {
  const [bill, setBill] = useState(150);
  const [energy, setEnergy] = useState<EnergyKey>("electrique");

  const { newBill, saveYear } = useMemo(() => {
    const factor = ENERGY_FACTORS[energy];
    const estimatedNew = Math.round(bill * (1 - factor));
    const monthlySave = bill - estimatedNew;
    return {
      newBill: estimatedNew,
      saveYear: (monthlySave * 12).toLocaleString("fr-FR"),
    };
  }, [bill, energy]);

  return (
    <div className="sim-card" id="simulator">
      <div className="sim-head">
        <span className="sim-title">Simulateur d&apos;économies</span>
        <span className="sim-badge">30 sec.</span>
      </div>
      <p className="sim-sub">Déplacez le curseur et sélectionnez votre énergie actuelle.</p>

      <div className="sim-row">
        <label htmlFor="bill-range">
          Facture de chauffage mensuelle <span className="val">{bill} €</span>
        </label>
        <input
          type="range"
          id="bill-range"
          min={50}
          max={400}
          step={10}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>

      <div className="sim-row">
        <label>Énergie actuelle</label>
        <div className="chip-group" role="group" aria-label="Énergie de chauffage actuelle">
          {(Object.keys(ENERGY_LABELS) as EnergyKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className="chip"
              aria-pressed={energy === key}
              onClick={() => setEnergy(key)}
            >
              {ENERGY_LABELS[key]}
            </button>
          ))}
        </div>
      </div>

      <div className="sim-result">
        <div>
          <div className="label">Facture estimée après travaux</div>
          <div className="amount">
            {newBill} €<small>/mois</small>
          </div>
        </div>
        <div>
          <div className="label">Économie annuelle estimée</div>
          <div className="amount" style={{ color: "var(--petrol-800)" }}>
            {saveYear} €<small>/an</small>
          </div>
        </div>
      </div>

      <a href="#lead-form" className="btn btn-primary">
        Recevoir mon estimation personnalisée
      </a>
      <p className="sim-note">
        Estimation indicative basée sur des moyennes constatées, hors aides financières. Le
        montant réel dépend de votre logement, de votre zone climatique et de votre éligibilité
        aux aides de l&apos;État. Une visite technique gratuite permet d&apos;obtenir un chiffrage
        précis.
      </p>
    </div>
  );
}
