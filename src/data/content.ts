// Todo el texto del sitio. Pendiente de confirmar con la clínica (no se publica hasta tenerlo):
// dirección, horario, colegiado, fotos reales y redes sociales. Ver README.

export const clinic = {
  name: 'Dental Kaizen',
  brand: 'Dental Kaizen',
  brandSub: 'Clínica dentista',
  tagline: 'Tu mejor sonrisa empieza aquí',
  title: 'Clínica dentista en Guatemala · Dental Kaizen',
  description:
    'Cuida tu sonrisa en Dental Kaizen, clínica dentista en zona 10 de Mixco con el Dr. Muelitas Axpuaca. Presupuesto claro y citas por WhatsApp.',
  phone: '+502 3724 5564',
  phoneE164: '+50237245564',
  email: 'rominchote@gmail.com',
  message: '¡Hola! Me gustaría solicitar una cita en Dental Kaizen.',
};

export const nav = [
  { label: 'Inicio', path: '/#inicio' },
  { label: 'Tratamientos', path: '/#tratamientos' },
  { label: 'Preguntas', path: '/#preguntas' },
  { label: 'Visítanos', path: '/visitanos/' },
  { label: 'Solicitar cita', short: 'Cita', path: '/#cita' },
];

/** Dirección, horario y mapa: al llenarlos, la página y los datos para Google se actualizan solos. */
export const visit: {
  intro: string;
  address: string[];
  addressPending: string;
  geo: { latitude: number; longitude: number };
  mapsUrl: string;
  hours: { days: string; time: string }[];
  hoursPending: string;
  hoursNote: string;
  askMessage: string;
  tips: { title: string; text: string }[];
} = {
  intro: 'Te esperamos con cita previa en La Comunidad, zona 10 de Mixco. Confirma tu horario antes de venir.',
  address: ['24 calle 3-95, La Comunidad', 'Zona 10 de Mixco, Guatemala'],
  addressPending: 'Te compartimos la ubicación exacta por WhatsApp',
  // 14°37'10.0"N 90°35'00.9"W
  geo: { latitude: 14.619444, longitude: -90.583583 },
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=14.619444%2C-90.583583',
  hours: [{ days: 'Lunes a sábado', time: 'Con cita previa' }],
  hoursPending: 'Atendemos con cita previa. Escríbenos y te contamos qué horarios hay disponibles.',
  hoursNote: 'Escríbenos y te contamos qué horas hay disponibles.',
  askMessage: '¡Hola! ¿Me comparten la dirección y el horario de Dental Kaizen?',
  tips: [
    { title: 'Confirma tu cita', text: 'Revisa el día y la hora que acordamos. Si no puedes venir, avísanos por WhatsApp.' },
    { title: 'Trae tu información', text: 'Ten a mano tus radiografías recientes y la lista de medicamentos que tomas.' },
    { title: 'Cuéntanos todo', text: 'Dinos si tienes alergias, alguna enfermedad o un embarazo. Así te cuidamos mejor.' },
  ],
};

export const treatments = [
  { name: 'Valoración dental', short: 'Empieza aquí y descubre qué necesita tu sonrisa.', text: 'Examinamos tus dientes y encías, resolvemos tus dudas y te mostramos qué atender primero. Sales con un plan claro para decidir con calma.' },
  { name: 'Limpieza dental', short: 'Recupera la sensación de una boca fresca y limpia.', text: 'Retiramos la placa y el sarro que el cepillo no alcanza. Es una de las mejores formas de prevenir caries y problemas de encías.' },
  { name: 'Resinas', short: 'Repara tus dientes con un acabado del mismo tono.', text: 'Eliminamos la caries y reconstruimos la pieza con un material del color de tu diente. Mientras antes la tratemos, más diente natural conservas.' },
  { name: 'Endodoncia', short: 'Una oportunidad para conservar tu diente.', text: 'Cuando la caries o un golpe llegan al nervio, limpiamos y sellamos el interior de la pieza. Después la restauramos para que vuelva a cumplir su función.' },
  { name: 'Exodoncia y muelas del juicio', short: 'Extracciones con cuidado y sin sorpresas.', text: 'Si una pieza ya no puede conservarse, te explicamos el procedimiento, sus riesgos y los cuidados posteriores. También valoramos tus muelas del juicio.' },
  { name: 'Coronas e implantes', short: 'Vuelve a morder y sonreír con confianza.', text: 'La corona protege un diente debilitado y el implante ocupa el lugar de la raíz que falta. En tu valoración definimos cuál es la mejor opción para ti.' },
  { name: 'Ortodoncia', short: 'Alinea tu sonrisa y mejora tu mordida.', text: 'Estudiamos tu caso antes de empezar y seguimos tu avance en controles periódicos. El tiempo de tratamiento depende de cada persona.' },
  { name: 'Blanqueamiento', short: 'Aclara tus dientes y luce una sonrisa más luminosa.', text: 'Antes comprobamos que tus dientes y encías estén sanos. Puede causar sensibilidad temporal y no cambia el color de resinas ni coronas.' },
];

export const stepsIntro = 'Desde el primer saludo hasta tu próximo control, siempre sabes qué sigue y por qué.';

export const steps = [
  { title: 'Escucha', text: 'Queremos conocer tu historia, tus molestias y la sonrisa que esperas.' },
  { title: 'Diagnóstico', text: 'Examinamos cada pieza y registramos su estado en tu odontograma digital.' },
  { title: 'Plan a tu medida', text: 'Conoces tus opciones y tu presupuesto antes de iniciar cualquier tratamiento.' },
  { title: 'Seguimiento', text: 'Cuidamos tu evolución y planificamos contigo los próximos controles.' },
];

export const promises = [
  { title: 'Tu boca, pieza por pieza', text: 'Tu odontograma digital guarda qué tiene cada diente, qué se le hizo y cuándo.' },
  { title: 'Precios claros desde el inicio', text: 'Ves cuánto cuesta cada tratamiento antes de tomar una decisión.' },
  { title: 'Primero lo que importa', text: 'Te decimos qué es urgente y qué puede esperar, para que avances a tu ritmo.' },
  { title: 'Explicaciones que sí se entienden', text: 'Hablamos sin tecnicismos y respondemos todas tus preguntas antes de empezar.' },
];

export const faq = [
  { q: '¿Cómo solicito mi cita?', a: 'Es muy fácil. Llena el formulario o escríbenos por WhatsApp al +502 3724 5564. Tu cita queda lista cuando te confirmemos el día y la hora.' },
  { q: '¿Dónde están y qué días atienden?', a: 'Estamos en 24 calle 3-95, La Comunidad, zona 10 de Mixco. Atendemos de lunes a sábado con cita previa.' },
  { q: '¿Cuánto cuesta un tratamiento?', a: 'Cada sonrisa es distinta. Después de tu valoración recibes un presupuesto con el precio de cada tratamiento, para que decidas con tranquilidad.' },
  { q: '¿Me va a doler?', a: 'Cada persona lo vive de manera diferente y existen opciones de anestesia local. Si sientes nervios, cuéntanos. Iremos paso a paso y a tu ritmo.' },
  { q: '¿Cada cuánto debo visitar al dentista?', a: 'Depende del estado de tus dientes y encías. En tu consulta acordamos la frecuencia ideal para ti.' },
  { q: 'Tengo dolor fuerte o hinchazón. ¿Qué hago?', a: 'Llámanos o escríbenos cuanto antes. Si tienes dificultad para respirar o tragar, fiebre o una hinchazón que avanza, acude de inmediato a una emergencia.' },
];

export const times = ['Por la mañana', 'Por la tarde', 'Cualquier horario'];
