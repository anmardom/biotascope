// Función serverless de Vercel: recibe el formulario y lo envía por el SMTP de IONOS.
// Variables de entorno (Vercel → Settings → Environment Variables):
//   SMTP_USER  buzón de IONOS que envía, p. ej. angel@biotascope.com
//   SMTP_PASS  contraseña de ese buzón
//   MAIL_TO    (opcional) destinatario; por defecto SMTP_USER
//   SMTP_HOST  (opcional) por defecto smtp.ionos.es
import nodemailer from 'nodemailer';

const SERVICES = {
  'meta-barcoding': 'Meta-barcoding',
  taxonomico: 'Análisis taxonómico',
  funcional: 'Perfilado funcional',
  general: 'Bioinformática general',
  otro: 'Otra consulta',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max) => String(value ?? '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

  // Campo trampa: los humanos no lo ven, los bots lo rellenan.
  if (body.website) return res.status(200).json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const organization = clean(body.organization, 200);
  const service = SERVICES[body.service];
  const message = clean(body.message, 5000);

  if (!name || !EMAIL_RE.test(email) || !service || !message || !body.consent) {
    return res.status(400).json({ ok: false });
  }

  const { SMTP_USER, SMTP_PASS, MAIL_TO, SMTP_HOST = 'smtp.ionos.es' } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('Faltan SMTP_USER / SMTP_PASS');
    return res.status(500).json({ ok: false });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      // IONOS solo deja enviar desde el buzón autenticado; el visitante va en Reply-To.
      from: `"BiotaScope web" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: { name, address: email },
      subject: `Nueva consulta: ${service} — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Organización: ${organization || '—'}`,
        `Servicio: ${service}`,
        '',
        message,
      ].join('\n'),
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error SMTP:', err);
    return res.status(502).json({ ok: false });
  }
}
