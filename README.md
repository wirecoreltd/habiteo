# Solvéo Habitat — Landing page (Next.js)

Landing page de génération de leads pour la vente de pompes à chaleur,
panneaux photovoltaïques et isolation.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Structure

- `app/page.tsx` — assemble tous les composants de la page
- `components/` — un composant par section (Hero, Simulator, Services, Process,
  Testimonials, FAQ, CtaSection/LeadForm, Footer, StickyCta)
- `app/api/leads/route.ts` — endpoint qui reçoit les soumissions du formulaire
  (`POST /api/leads`). Il ne fait actuellement qu'un `console.log` : voir le
  bloc `TODO` dans ce fichier pour brancher un vrai envoi (email, CRM, base de
  données).
- `app/globals.css` — feuille de style globale (variables de couleurs,
  typographie, composants). Les polices (Fraunces, Inter, IBM Plex Mono) sont
  chargées via `next/font/google` dans `app/layout.tsx`.

## À faire avant mise en production

1. **Brancher l'envoi des leads** dans `app/api/leads/route.ts` (email,
   CRM, ou base de données). Ajouter les clés API nécessaires dans un fichier
   `.env.local` (non commité).
2. Remplacer le nom de marque, le logo, le numéro de téléphone et les avis
   clients (actuellement illustratifs) par les informations réelles de
   l'entreprise.
3. Remplacer les mentions de certifications (RGE) par les certifications
   réellement détenues.
4. Ajouter une vraie page de mentions légales / politique de confidentialité
   (liens actuellement en placeholder dans le footer).
5. Calibrer les chiffres du simulateur d'économies avec des données réelles
   si possible.

