import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const CONTACT_TO = process.env.CONTACT_TO_EMAIL || 'livfairytales@gmail.com';
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

function sanitize(value: string | undefined) {
  return (value ?? '').trim();
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Le service d'envoi d'e-mails n'est pas configuré." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Merci de compléter tous les champs.' },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: 'Le message est trop court.' },
      { status: 400 }
    );
  }

  const emailSubject = `[Contact] ${subject}`;
  const text = `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\n${message}`;
  const html = `
    <h2>Nouvelle demande via le site Liv Fairytales</h2>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Sujet :</strong> ${subject}</p>
    <p><strong>Message :</strong></p>
    <p>${message.replace(/\n/g, '<br />')}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      subject: emailSubject,
      text,
      html,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Impossible d'envoyer le message. Réessayez plus tard." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
