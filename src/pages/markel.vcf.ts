import type { APIRoute } from 'astro';
import { cv } from '@/data/cv';

// Contact card offered on /links ("Guardar contacto").
export const GET: APIRoute = () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Álvarez Alonso;Markel;;;',
    `FN:${cv.name}`,
    `TITLE:${cv.headline.es}`,
    `EMAIL;TYPE=INTERNET:${cv.contact.email}`,
    `TEL;TYPE=CELL:${cv.contact.phone.replace(/\s/g, '')}`,
    `URL:https://${cv.contact.website}`,
    `URL:https://www.${cv.contact.linkedin}`,
    `URL:https://${cv.contact.github}`,
    'ADR;TYPE=HOME:;;;Pamplona;Navarra;;España',
    'END:VCARD',
  ].join('\r\n');

  return new Response(vcard + '\r\n', {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
