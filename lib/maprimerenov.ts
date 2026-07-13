// Plafonds de ressources MaPrimeRénov' 2026
// Source : barème officiel (à mettre à jour chaque année lors de la revalorisation).
// Les 3 valeurs par ligne sont les plafonds MAXIMUM (inclus) pour les profils
// "bleu" (très modeste), "jaune" (modeste) et "violet" (intermédiaire).
// Au-delà du plafond "violet", le foyer est profil "rose" (aisé).

export type Profile = "bleu" | "jaune" | "violet" | "rose";

export const PROFILE_LABELS: Record<Profile, string> = {
  bleu: "Très modeste",
  jaune: "Modeste",
  violet: "Intermédiaire",
  rose: "Aisé",
};

type Thresholds = { bleu: number; jaune: number; violet: number };

const IDF_BASE: Record<1 | 2 | 3 | 4 | 5, Thresholds> = {
  1: { bleu: 24031, jaune: 29253, violet: 40851 },
  2: { bleu: 35270, jaune: 42933, violet: 60051 },
  3: { bleu: 42357, jaune: 51564, violet: 71846 },
  4: { bleu: 49455, jaune: 60208, violet: 84562 },
  5: { bleu: 56580, jaune: 68877, violet: 96817 },
};
const IDF_INCREMENT: Thresholds = { bleu: 7116, jaune: 8663, violet: 12257 };

const HORS_IDF_BASE: Record<1 | 2 | 3 | 4 | 5, Thresholds> = {
  1: { bleu: 17363, jaune: 22259, violet: 31185 },
  2: { bleu: 25393, jaune: 32553, violet: 45842 },
  3: { bleu: 30540, jaune: 39148, violet: 55196 },
  4: { bleu: 35676, jaune: 45735, violet: 64550 },
  5: { bleu: 40835, jaune: 52348, violet: 73907 },
};
const HORS_IDF_INCREMENT: Thresholds = { bleu: 5151, jaune: 6598, violet: 9357 };

export type Region = "idf" | "hors-idf";

/** Calcule les plafonds applicables pour une taille de foyer donnée (au-delà de 5,
 * on ajoute l'incrément par personne supplémentaire). */
export function getThresholds(region: Region, householdSize: number): Thresholds {
  const size = Math.max(1, Math.round(householdSize));
  const base = region === "idf" ? IDF_BASE : HORS_IDF_BASE;
  const increment = region === "idf" ? IDF_INCREMENT : HORS_IDF_INCREMENT;

  if (size <= 5) {
    return base[size as 1 | 2 | 3 | 4 | 5];
  }
  const extra = size - 5;
  const ref = base[5];
  return {
    bleu: ref.bleu + extra * increment.bleu,
    jaune: ref.jaune + extra * increment.jaune,
    violet: ref.violet + extra * increment.violet,
  };
}

/** Détermine le profil (bleu/jaune/violet/rose) selon le revenu fiscal de référence. */
export function getProfile(region: Region, householdSize: number, rfr: number): Profile {
  const t = getThresholds(region, householdSize);
  if (rfr <= t.bleu) return "bleu";
  if (rfr <= t.jaune) return "jaune";
  if (rfr <= t.violet) return "violet";
  return "rose";
}
