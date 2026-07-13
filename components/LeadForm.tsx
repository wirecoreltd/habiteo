"use client";

import { FormEvent, useState } from "react";

const PROJECTS = [
  { value: "pac", label: "Pompe à chaleur" },
  { value: "photovoltaique", label: "Photovoltaïque" },
  { value: "isolation", label: "Isolation" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [projects, setProjects] = useState<string[]>([]);

  function toggleProject(value: string) {
    setProjects((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value.trim(),
      prenom: (form.elements.namedItem("prenom") as HTMLInputElement).value.trim(),
      tel: (form.elements.namedItem("tel") as HTMLInputElement).value.trim(),
      cp: (form.elements.namedItem("cp") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      creneau: (form.elements.namedItem("creneau") as HTMLSelectElement).value,
      projets: projects,
    };

    if (!data.nom || !data.prenom || !data.tel || !data.cp) {
      setErrorMsg("Merci de renseigner tous les champs obligatoires (*).");
      return;
    }
    if (projects.length === 0) {
      setErrorMsg("Merci de sélectionner au moins un type de projet.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler directement.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-card">
        <div className="form-success show">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l3 3 6-6" />
          </svg>
          <h3>Demande bien reçue</h3>
          <p>
            Un conseiller vous appelle sous 24h ouvrées pour organiser la visite technique. Merci
            pour votre confiance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form id="rappel-form" noValidate onSubmit={handleSubmit}>
        <h3>Être rappelé gratuitement</h3>
        <p className="sub">Tous les champs marqués * sont obligatoires.</p>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="nom">Nom *</label>
            <input type="text" id="nom" name="nom" required autoComplete="family-name" />
          </div>
          <div className="field">
            <label htmlFor="prenom">Prénom *</label>
            <input type="text" id="prenom" name="prenom" required autoComplete="given-name" />
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="tel">Téléphone *</label>
            <input type="tel" id="tel" name="tel" required autoComplete="tel" placeholder="06 00 00 00 00" />
          </div>
          <div className="field">
            <label htmlFor="cp">Code postal *</label>
            <input type="text" id="cp" name="cp" required inputMode="numeric" pattern="[0-9]{5}" placeholder="75000" />
          </div>
        </div>

        <div className="field field-full" style={{ marginBottom: 0 }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" />
        </div>

        <fieldset style={{ marginTop: 16 }}>
          <legend>Votre projet *</legend>
          <div className="check-row">
            {PROJECTS.map((p) => (
              <label className="check-pill" key={p.value}>
                <input
                  type="checkbox"
                  name="projet"
                  value={p.value}
                  checked={projects.includes(p.value)}
                  onChange={() => toggleProject(p.value)}
                />
                <span>{p.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="creneau">Meilleur moment pour vous rappeler</label>
          <select id="creneau" name="creneau" defaultValue="">
            <option value="">Indifférent</option>
            <option value="matin">Matin (9h–12h)</option>
            <option value="apresmidi">Après-midi (14h–17h)</option>
            <option value="soir">Fin de journée (17h–19h)</option>
          </select>
        </div>

        <p className="consent">
          En soumettant ce formulaire, vous acceptez d&apos;être recontacté par téléphone au sujet
          de votre projet de rénovation énergétique. Vos données ne sont ni cédées ni revendues.
          Voir notre politique de confidentialité.
        </p>

        {errorMsg && (
          <p style={{ color: "var(--copper-600)", fontSize: 13.5, marginBottom: 14, fontWeight: 600 }}>
            {errorMsg}
          </p>
        )}

        <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande de rappel"}
        </button>
      </form>
    </div>
  );
}
