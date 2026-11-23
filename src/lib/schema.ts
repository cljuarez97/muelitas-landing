import { clinic, faq, treatments } from '../data/content';

/** Solo datos confirmados: sin dirección, horario ni credenciales hasta que la clínica los dé. */
export function dentistSchema(url: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Dentist',
        '@id': `${url}#clinica`,
        name: clinic.name,
        url,
        image,
        telephone: clinic.phoneE164,
        email: clinic.email,
        address: { '@type': 'PostalAddress', addressCountry: 'GT' },
        availableService: treatments.map((t) => ({ '@type': 'MedicalProcedure', name: t.name })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#preguntas`,
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };
}

/** JSON seguro dentro de <script>. */
export const toJsonLd = (data: unknown): string => JSON.stringify(data).replace(/</g, '\\u003c');
