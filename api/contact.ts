import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tous les champs (nom, email, sujet, message) sont requis.' });
  }

  const targetEmail = 'obiity1@gmail.com';
  const emailSubject = `[Contact Site Web] ${subject}`;
  const dateStr = new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });
  const emailText = [
    `Formulaire : Contact`,
    `Date       : ${dateStr}`,
    `───────────────────────────────────────`,
    `Nom        : ${name}`,
    `Email      : ${email}`,
    `Sujet      : ${subject}`,
    `───────────────────────────────────────`,
    `Message :`,
    message,
    `───────────────────────────────────────`,
    `Envoyé depuis le portfolio obiity.com`,
  ].join('\n');

  // Option A: Send via Resend if RESEND_API_KEY is defined
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev', // Can be updated if they verify a custom domain in Resend
          to: targetEmail,
          reply_to: email,
          subject: emailSubject,
          text: emailText,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Resend HTTP error ${response.status}`);
      }

      return res.status(200).json({ success: true, message: 'Message envoyé via Resend avec succès.' });
    } catch (error: any) {
      console.error('Erreur d\'envoi via Resend:', error);
      return res.status(500).json({ error: `Échec de l'envoi via Resend : ${error.message}` });
    }
  }

  // Option B: Send via SMTP Gmail using nodemailer
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`, // Set sender name, Gmail forces from address to be SMTP_USER
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        text: emailText,
      });

      return res.status(200).json({ success: true, message: 'Message envoyé via SMTP Gmail avec succès.' });
    } catch (error: any) {
      console.error('Erreur d\'envoi via SMTP Gmail:', error);
      return res.status(500).json({ error: `Échec de l'envoi via SMTP Gmail : ${error.message}` });
    }
  }

  // If neither config is present
  return res.status(500).json({
    error: 'Configuration serveur manquante. Veuillez définir les variables d\'environnement RESEND_API_KEY ou (SMTP_USER et SMTP_PASS).',
  });
}
