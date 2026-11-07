/**
 * Preguntas frecuentes: la MISMA lista se dibuja en la página (FAQ.tsx) y va al
 * JSON-LD FAQPage (layout). Google exige que lo del schema esté visible.
 */
export const PREGUNTAS: { q: string; a: string }[] = [
  {
    q: "¿Es una app? ¿Hay que bajar algo?",
    a: "No. Es una web: tus clientes reservan desde el link de tu barbería y vos y tus barberos entran desde el celu o la compu, con usuario y clave. No hay que instalar nada.",
  },
  {
    q: "¿Yo tengo que configurar todo?",
    a: "No. Te lo dejamos funcionando nosotros: cargamos tus barberos, servicios, precios, horarios y sucursales, y te mostramos cómo se usa. El tiempo depende de cuántas sedes y servicios tengas; te lo decimos antes de arrancar.",
  },
  {
    q: "¿Sirve si hoy anoto todo en una planilla de papel?",
    a: "Sí, y es lo más común. Te imprimimos la planilla del día con tus barberos, servicios y precios; el encargado la llena como siempre y a la noche se pasa al sistema de una sola vez, no turno por turno. Si la caja no cuadra con el total del papel, te avisa antes de guardar.",
  },
  {
    q: "¿Sirve con Mercado Pago?",
    a: "Sí. Cada servicio tiene su precio de lista y su precio con descuento en efectivo (la transferencia puede ir al precio de efectivo si querés), y las propinas que entran por Mercado Pago quedan registradas, así la caja coincide con el resumen. Además estamos probando en una sede el cobro con el QR del mostrador: muestra el monto exacto y, cuando el cliente paga, el turno queda cobrado solo.",
  },
  {
    q: "¿Emite facturas?",
    a: "No factura en ARCA. Te dice cuánto cobró cada monotributo (por ejemplo, la tarjeta y el QR de un barbero a un CUIT y el resto a otro) para que se lo pases a tu contador.",
  },
  {
    q: "¿Mis barberos ven cuánto gana el negocio?",
    a: "No. Un barbero ve su agenda y cuánto lleva ganado él hoy. La caja, los gastos, los sueldos y las estadísticas los ven solo el dueño y el encargado.",
  },
  {
    q: "¿Mis datos están seguros? ¿Quién los ve?",
    a: "Cada barbería tiene su propia base de datos, separada de las demás. Adentro, cada uno ve lo suyo: el barbero su agenda, el encargado su sede y el dueño todo. Y queda registrado quién cambió cada turno y cuándo.",
  },
  {
    q: "¿Y si alguien me llena la agenda de turnos truchos?",
    a: "Cada número de teléfono puede tener hasta 3 turnos activos a la vez y hay un límite de reservas por conexión. Así es muy difícil que alguien te bloquee la agenda.",
  },
  {
    q: "¿Y si el sistema falla un sábado a la mañana?",
    a: "Corre en Vercel y Supabase, los mismos servicios que usan miles de empresas. Si hay cualquier problema, nos escribís por WhatsApp y te respondemos enseguida. Y aunque el sistema no ande, tu barbería sigue atendiendo: anotás en la planilla y se carga después.",
  },
  {
    q: "¿El precio es en dólares? ¿Cómo pago?",
    a: "Los precios están en dólares para mantenerlos estables, pero pagás en pesos al dólar oficial del Banco Nación del día del pago, o en dólares si preferís. Aceptamos transferencia bancaria y Mercado Pago.",
  },
  {
    q: "¿Qué pasa si me quiero ir?",
    a: "No hay permanencia mínima: te das de baja cuando quieras, avisando con 30 días. Y si te vas, te exportamos toda la información de tus clientes y turnos: los datos son tuyos.",
  },
];
