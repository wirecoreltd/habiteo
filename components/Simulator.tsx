"use client";

import { useState, useMemo } from "react";
import { getProfile, PROFILE_LABELS, Region, Profile } from "@/lib/maprimerenov";

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

const PROFILE_NOTES: Record<Profile, string> = {
  bleu: "Vous êtes éligible au niveau d'aide le plus élevé pour vos travaux.",
  jaune: "Vous êtes éligible à un niveau d'aide renforcé pour vos travaux.",
  violet: "Vous êtes éligible aux aides de base pour vos travaux.",
  rose: "Des aides ciblées (ex. Éco-PTZ) peuvent encore s'appliquer selon vos travaux.",
};

export default function Simulator() {
  // --- Éligibilité MaPrimeRénov' ---
  const [region, setRegion] = useState<Region>("hors-idf");
  const [householdSize, setHouseholdSize] = useState(2);
  const [rfr, setRfr] = useState<string>("");

  const rfrNumber = Number(rfr.replace(/\s/g, ""));
  const hasRfr = rfr.trim() !== "" && !Number.isNaN(rfrNumber);
  const profile = useMemo(
    () => (hasRfr ? getProfile(region, householdSize, rfrNumber) : null),
    [region, householdSize, rfrNumber, hasRfr]
  );

  // --- Simulateur d'économies ---
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
        <span className="sim-badge">2 min.</span>
      </div>
      <p className="sim-sub">
        Vérifiez d&apos;abord votre profil d&apos;aides, puis estimez vos économies.
      </p>

      {/* ---- Étape 1 : éligibilité MaPrimeRénov' ---- */}
      <div className="sim-row">
        <label>Vous habitez</label>
        <div className="chip-group" role="group" aria-label="Région">
          <button
            type="button"
            className="chip"
            aria-pressed={region === "idf"}
            onClick={() => setRegion("idf")}
          >
            Île-de-France
          </button>
          <button
            type="button"
            className="chip"
            aria-pressed={region === "hors-idf"}
            onClick={() => setRegion("hors-idf")}
          >
            Hors Île-de-France
          </button>
        </div>
      </div>

      <div className="sim-row">
        <label htmlFor="household-range">
          Personnes composant le foyer fiscal{" "}
          <span className="val">{householdSize >= 8 ? "8 ou plus" : householdSize}</span>
        </label>
        <input
          type="range"
          id="household-range"
          min={1}
          max={8}
          step={1}
          value={householdSize}
          onChange={(e) => setHouseholdSize(Number(e.target.value))}
        />
      </div>

      <div className="sim-row">
        <label htmlFor="rfr-input">Revenu fiscal de référence (RFR)</label>
        <input
          type="text"
          inputMode="numeric"
          id="rfr-input"
          placeholder="Ex : 32 000"
          value={rfr}
          onChange={(e) => setRfr(e.target.value.replace(/[^\d\s]/g, ""))}
          style={{
            width: "100%",
            border: "1.5px solid var(--line-dark)",
            borderRadius: 10,
            padding: "11px 13px",
            fontSize: 14.5,
            fontFamily: "var(--font-inter),sans-serif",
            background: "var(--frost-50)",
          }}
        />
        <p className="sim-note" style={{ marginTop: 8 }}>
          Indiqué sur votre dernier avis d&apos;imposition, ligne « Revenu fiscal de référence ».
        </p>
      </div>

      {profile && (
        <div className={`profile-result profile-${profile}`}>
          <span className={`profile-dot profile-dot-${profile}`}></span>
          <div>
            <div className="profile-label">
              Profil {PROFILE_LABELS[profile]}
            </div>
            <div className="profile-note">{PROFILE_NOTES[profile]}</div>
          </div>
        </div>
      )}

      <div className="sim-divider"></div>

      {/* ---- Étape 2 : économies estimées ---- */}
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
        Estimations indicatives basées sur le barème officiel des plafonds de ressources
        MaPrimeRénov&apos; 2026 et sur des moyennes de consommation constatées. Le montant réel de
        vos aides et de vos économies dépend de votre logement, des travaux réalisés et d&apos;une
        vérification lors de la visite technique gratuite.
      </p>
    </div>
  );
}
