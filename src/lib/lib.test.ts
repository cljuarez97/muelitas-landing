import { describe, expect, it } from 'vitest';
import { clinic, nav, treatments } from '../data/content';
import { requestMessage } from './request';
import { dentistSchema, toJsonLd } from './schema';
import { href, whatsappUrl } from './url';

describe('url', () => {
  it('respeta la base del sitio', () => {
    expect(href('/privacidad/', '/muelitas-landing')).toBe('/muelitas-landing/privacidad/');
    expect(href('/', '/muelitas-landing/')).toBe('/muelitas-landing/');
  });
  it('arma el enlace de WhatsApp con el número de la clínica', () => {
    expect(whatsappUrl(clinic.phoneE164, 'Hola & adiós')).toBe('https://wa.me/50237245564?text=Hola%20%26%20adi%C3%B3s');
  });
});

describe('solicitud', () => {
  it('omite lo vacío', () => {
    expect(requestMessage({ name: ' Ana ', treatment: '', time: '', note: ' ' })).toBe('Hola, soy Ana y quisiera solicitar una cita.');
  });
  it('limpia saltos y recorta', () => {
    const text = requestMessage({ name: 'Ana\nMotivo: otro', treatment: 'Resinas', time: 'Por la tarde', note: 'x'.repeat(900) });
    expect(text.split('\n')).toHaveLength(4);
    expect(text.length).toBeLessThan(520);
  });
});

describe('schema', () => {
  it('publica solo datos confirmados y no puede cerrar el script', () => {
    const json = toJsonLd(dentistSchema('https://x/', 'https://x/og.png'));
    expect(json).toContain('+50237245564');
    expect(json).not.toContain('streetAddress');
    expect(toJsonLd({ a: '</script>' })).not.toContain('</script>');
  });
});

describe('contenido', () => {
  it('cabe en los buscadores y no repite nombres', () => {
    expect(clinic.title.length).toBeLessThanOrEqual(60);
    expect(clinic.description.length).toBeLessThanOrEqual(160);
    expect(new Set(treatments.map((t) => t.name)).size).toBe(treatments.length);
    expect(new Set(nav.map((n) => n.id)).size).toBe(nav.length);
  });
});
