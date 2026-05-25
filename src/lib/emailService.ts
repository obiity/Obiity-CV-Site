/**
 * Centralized email service calling the backend serverless function
 */

export interface ContactPayload {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Erreur de communication avec le serveur (HTTP ${res.status})`);
  }
}
