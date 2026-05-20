/**
 * Centralized email service — Web3Forms
 *
 * All site forms send through this module to obiity1@gmail.com.
 * The access key ties every submission to that inbox.
 *
 * Setup (one-time):
 *   1. Go to https://web3forms.com
 *   2. Enter obiity1@gmail.com → click "Create Access Key"
 *   3. Copy the key into .env:  VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 *   4. Restart the dev server
 */

const ENDPOINT = 'https://api.web3forms.com/submit';

function getKey(): string {
  const key = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  if (!key) throw new Error('VITE_WEB3FORMS_KEY manquant. Ajoutez-le dans .env');
  return key;
}

async function post(fields: Record<string, string>): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body:    JSON.stringify({ access_key: getKey(), ...fields }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const json = (await res.json()) as { success: boolean; message?: string };
  if (!json.success) throw new Error(json.message ?? 'Échec de l\'envoi.');
}

/* ── Contact form ─────────────────────────────────────────────────── */
export interface ContactPayload {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const date = new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });

  await post({
    from_name: data.name,
    email:     data.email,
    subject:   `[Contact] ${data.subject}`,
    message: [
      `Formulaire : Contact`,
      `Date       : ${date}`,
      ``,
      `Nom    : ${data.name}`,
      `Email  : ${data.email}`,
      `Sujet  : ${data.subject}`,
      ``,
      `Message :`,
      `───────────────────────────────────────`,
      data.message,
      `───────────────────────────────────────`,
      `Envoyé depuis obiity.com`,
    ].join('\n'),
  });
}

/* ── Collaborate / Collab modal ───────────────────────────────────── */
export interface CollabPayload {
  fullName:          string;
  email:             string;
  phone:             string;
  company:           string;
  website:           string;
  budget:            string;
  collaborationType: string;
}

export async function sendCollabEmail(data: CollabPayload): Promise<void> {
  const date = new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });

  await post({
    from_name: data.fullName,
    email:     data.email,
    subject:   `[Collaboration] ${data.fullName} — ${data.collaborationType}`,
    message: [
      `Formulaire : Collaboration`,
      `Date       : ${date}`,
      ``,
      `Nom           : ${data.fullName}`,
      `Email         : ${data.email}`,
      `Téléphone     : ${data.phone    || 'Non renseigné'}`,
      `Entreprise    : ${data.company  || 'Non renseignée'}`,
      `Site web      : ${data.website  || 'Non renseigné'}`,
      `Budget        : ${data.budget   || 'Non précisé'}`,
      `Collaboration : ${data.collaborationType}`,
      `───────────────────────────────────────`,
      `Envoyé depuis obiity.com`,
    ].join('\n'),
  });
}
