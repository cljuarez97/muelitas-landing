export interface VisitRequest {
  name: string;
  treatment: string;
  time: string;
  note: string;
}

const clean = (text: string, max: number): string => text.replace(/\s+/g, ' ').trim().slice(0, max);

/** Mensaje de WhatsApp con lo que la persona llenó; lo vacío no aparece. */
export function requestMessage(request: VisitRequest): string {
  const lines = [`Hola, soy ${clean(request.name, 80)} y quisiera solicitar una cita.`];
  const add = (label: string, value: string, max: number): void => {
    const text = clean(value, max);
    if (text !== '') lines.push(`${label}: ${text}`);
  };
  add('Motivo', request.treatment, 80);
  add('Horario que me queda mejor', request.time, 40);
  add('Comentario', request.note, 300);
  return lines.join('\n');
}
