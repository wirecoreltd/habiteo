import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  nom: string;
  prenom: string;
  tel: string;
  cp: string;
  email?: string;
  creneau?: string;
  projets: string[];
};

export async function POST(req: NextRequest) {
  let body: LeadPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  if (!body.nom || !body.prenom || !body.tel || !body.cp || !body.projets?.length) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }

  // ------------------------------------------------------------------
  // TODO (intégration) : c'est ici que le lead doit être enregistré /
  // transmis. Exemples selon votre stack :
  //
  // 1) Enregistrer en base de données (Postgres/Prisma, Supabase, etc.)
  //      await prisma.lead.create({ data: body })
  //
  // 2) Envoyer un email de notification (ex: Resend, Sendgrid, Postmark)
  //      await resend.emails.send({
  //        to: "commercial@solveo-habitat.fr",
  //        subject: `Nouveau lead — ${body.nom} ${body.prenom}`,
  //        text: JSON.stringify(body, null, 2),
  //      })
  //
  // 3) Pousser vers un CRM (HubSpot, Pipedrive, Salesforce...) via leur API
  //
  // Pensez à ajouter les variables d'environnement nécessaires (clés API,
  // URL de base de données) dans un fichier .env.local (jamais commité).
  // ------------------------------------------------------------------

  console.log("Nouveau lead reçu :", body);

  return NextResponse.json({ ok: true });
}
