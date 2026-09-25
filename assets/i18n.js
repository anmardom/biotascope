/**
 * BiotaScope — diccionario ES/EN y motor de traducción.
 *
 * Para cambiar un texto: búscalo por su clave y edítalo en `es` y en `en`.
 * En el HTML lo pinta el elemento que lleva  data-i18n="la.clave".
 */

export const strings = {

  /* ─────────────────── ESPAÑOL ─────────────────── */
  es: {
    'meta.title': 'BiotaScope — Servicios bioinformáticos de análisis meta-ómico',
    'meta.description': 'Análisis bioinformático de microbiota y datos ómicos: meta-barcoding, perfilado taxonómico y perfilado funcional. Resultados listos para publicar o para tomar decisiones.',

    'skip': 'Saltar al contenido',

    'nav.menu': 'Abrir menú',
    'nav.services': 'Servicios',
    'nav.results': 'Resultados',
    'nav.about': 'Sobre BiotaScope',
    'nav.contact': 'Contacto',
    'nav.langHint': 'Cambiar idioma',
    'nav.cta': 'Solicitar presupuesto',

    'hero.eyebrow': 'Bioinformática meta-ómica',
    'hero.title.lead': 'De secuencias crudas a resultados que puedes',
    'hero.title.accent': 'publicar',
    'hero.lead': 'Análisis bioinformático de microbiota, muestras ambientales y datos ómicos para grupos de investigación y empresas.',
    'hero.cta1': 'Solicitar presupuesto',
    'hero.cta2': 'Ver resultados',
    'hero.stat': '16S · 1.2M reads · 248 ASV',

    'tech.label': 'Tecnologías',

    'services.eyebrow': 'Servicios',
    'services.title': 'Qué hacemos',
    'services.lead': 'Cada análisis se adapta al diseño experimental del proyecto.',

    'svc.meta.title': 'Meta-barcoding',
    'svc.meta.text': 'Clasificación taxonómica y predicción funcional de comunidades microbianas a partir de secuencias amplificadas de 16S/ITS con QIIME2 y PICRUSt2.',

    'svc.kraken.title': 'Análisis taxonómico',
    'svc.kraken.text': 'Identificación taxonómica mediante alineamiento con bases de datos personalizadas utilizando Kraken2 y Bracken.',

    'svc.humann.title': 'Perfilado funcional',
    'svc.humann.text': 'Perfilado de rutas metabólicas mediante alineamiento funcional y enriquecimiento, útil para caracterizar el potencial funcional de microbiotas complejas.',

    'svc.general.title': 'Bioinformática general',
    'svc.general.text': 'Procesamiento de datos genómicos y transcriptómicos, con herramientas adaptadas a distintos diseños experimentales.',

    'results.eyebrow': 'Resultados',
    'results.title': 'Ejemplos de análisis',
    'results.lead': 'Pulsa en cualquier figura para verla a tamaño completo.',
    'results.cap1': 'Composición taxonómica · QIIME2',
    'results.cap2': 'Predicción funcional · PICRUSt2',
    'results.cap3': 'Jerarquía taxonómica · Krona',
    'results.cap4': 'Abundancia diferencial · Volcano plot',
    'results.cap5': 'Rutas metabólicas · Heatmap funcional',
    'results.cap6': 'Rutas diferenciales · Gráfico de barras',

    'about.eyebrow': 'Sobre BiotaScope',
    'about.title.lead': 'Datos de secuenciación convertidos en',
    'about.title.accent': 'respuestas',
    'about.p1': 'BiotaScope es un servicio especializado en análisis bioinformático meta-ómico. Trabajamos con grupos de investigación y empresas que necesitan convertir datos de secuenciación en resultados interpretables.',
    'about.step1.title': 'Plan acordado',
    'about.step1.text': 'Definimos contigo el plan de análisis antes de empezar.',
    'about.step2.title': 'Análisis reproducible',
    'about.step2.text': 'Pipelines documentados y versionados.',
    'about.step3.title': 'Entrega publicable',
    'about.step3.text': 'Figuras, tablas y métodos listos para el manuscrito.',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Cuéntanos tu proyecto',
    'contact.lead': 'Descríbenos el proyecto en un par de frases y te respondemos con una primera valoración.',

    'form.name': 'Nombre',
    'form.email': 'Email',
    'form.org': 'Organización',
    'form.optional': '(opcional)',
    'form.service': 'Servicio',
    'form.service.ph': 'Selecciona una opción…',
    'form.service.other': 'Otra consulta',
    'form.message': 'Mensaje',
    'form.consent': 'Acepto que se use mi email para responder a esta consulta.',
    'form.submit': 'Enviar consulta',
    'form.alt': 'O escríbenos a',
    'form.err.name': 'Escribe tu nombre.',
    'form.err.email': 'Escribe un email válido.',
    'form.err.service': 'Elige un servicio.',
    'form.err.message': 'Cuéntanos algo sobre el proyecto.',
    'form.err.consent': 'Necesitamos tu consentimiento para responderte.',
    'form.status.invalid': 'Revisa los campos marcados en rojo.',
    'form.status.sending': 'Enviando…',
    'form.status.success': '¡Gracias! Hemos recibido tu consulta y te responderemos pronto.',
    'form.status.error': 'No se ha podido enviar. Inténtalo de nuevo o escríbenos a angel@biotascope.com.',

    'footer.tag': 'Servicios bioinformáticos especializados en análisis meta-ómicos (microbiota, muestras ambientales) y datos ómicos.',

    'lb.close': 'Cerrar',
    'lb.prev': 'Anterior',
    'lb.next': 'Siguiente'
  },

  /* ─────────────────── ENGLISH ─────────────────── */
  en: {
    'meta.title': 'BiotaScope — Bioinformatics services for meta-omics analysis',
    'meta.description': 'Bioinformatics analysis of microbiota and omics data: meta-barcoding, taxonomic profiling and functional profiling. Results ready to publish or to act on.',

    'skip': 'Skip to content',

    'nav.menu': 'Open menu',
    'nav.services': 'Services',
    'nav.results': 'Results',
    'nav.about': 'About BiotaScope',
    'nav.contact': 'Contact',
    'nav.langHint': 'Change language',
    'nav.cta': 'Request a quote',

    'hero.eyebrow': 'Meta-omics bioinformatics',
    'hero.title.lead': 'From raw sequences to results you can',
    'hero.title.accent': 'publish',
    'hero.lead': 'Bioinformatics analysis of microbiota, environmental samples and omics data for research groups and companies.',
    'hero.cta1': 'Request a quote',
    'hero.cta2': 'See results',
    'hero.stat': '16S · 1.2M reads · 248 ASV',

    'tech.label': 'Technologies',

    'services.eyebrow': 'Services',
    'services.title': 'What we do',
    'services.lead': 'Every analysis is adapted to the experimental design of the project.',

    'svc.meta.title': 'Meta-barcoding',
    'svc.meta.text': 'Taxonomic classification and functional prediction of microbial communities from 16S/ITS amplicon sequences using QIIME2 and PICRUSt2.',

    'svc.kraken.title': 'Taxonomic analysis',
    'svc.kraken.text': 'Taxonomic identification through alignments with customized databases using Kraken2 and Bracken.',

    'svc.humann.title': 'Functional profiling',
    'svc.humann.text': 'Metabolic pathways profiling through functional alignment and enrichment analysis, useful to characterize the functional potential of complex microbiotas.',

    'svc.general.title': 'General bioinformatics',
    'svc.general.text': 'Genomic and transcriptomic data processing, using tools adapted to various experimental designs.',

    'results.eyebrow': 'Results',
    'results.title': 'Example analyses',
    'results.lead': 'Click any figure to see it full size.',
    'results.cap1': 'Taxonomic composition · QIIME2',
    'results.cap2': 'Functional prediction · PICRUSt2',
    'results.cap3': 'Taxonomic hierarchy · Krona',
    'results.cap4': 'Differential abundance · Volcano plot',
    'results.cap5': 'Metabolic pathways · Functional heatmap',
    'results.cap6': 'Differential pathways · Bar chart',

    'about.eyebrow': 'About BiotaScope',
    'about.title.lead': 'Sequencing data turned into',
    'about.title.accent': 'answers',
    'about.p1': 'BiotaScope is a service specialised in meta-omics bioinformatics analysis. We work with research groups and companies that need to turn sequencing data into interpretable results.',
    'about.step1.title': 'Agreed plan',
    'about.step1.text': 'We define the analysis plan with you before starting.',
    'about.step2.title': 'Reproducible analysis',
    'about.step2.text': 'Documented, versioned pipelines.',
    'about.step3.title': 'Publishable delivery',
    'about.step3.text': 'Figures, tables and methods ready for the manuscript.',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Tell us about your project',
    'contact.lead': 'Describe the project in a couple of sentences and we will come back with a first assessment.',

    'form.name': 'Name',
    'form.email': 'Email',
    'form.org': 'Organisation',
    'form.optional': '(optional)',
    'form.service': 'Service',
    'form.service.ph': 'Select an option…',
    'form.service.other': 'Another enquiry',
    'form.message': 'Message',
    'form.consent': 'I agree to my email being used to reply to this enquiry.',
    'form.submit': 'Send enquiry',
    'form.alt': 'Or email us at',
    'form.err.name': 'Please enter your name.',
    'form.err.email': 'Please enter a valid email.',
    'form.err.service': 'Please choose a service.',
    'form.err.message': 'Please tell us something about the project.',
    'form.err.consent': 'We need your consent in order to reply.',
    'form.status.invalid': 'Please check the fields marked in red.',
    'form.status.sending': 'Sending…',
    'form.status.success': 'Thank you! We have received your enquiry and will get back to you soon.',
    'form.status.error': 'Your message could not be sent. Please try again or email us at angel@biotascope.com.',

    'footer.tag': 'Bioinformatics services tailored to meta-omics analyses (microbiota, environmental samples) and omics data.',

    'lb.close': 'Close',
    'lb.prev': 'Previous',
    'lb.next': 'Next'
  }
};

const STORAGE_KEY = 'biotascope-lang';
const SUPPORTED = Object.keys(strings);

/** Idioma inicial: elección guardada → idioma del navegador → español. */
export function detectLang() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* modo privado */ }
  if (saved && SUPPORTED.includes(saved)) return saved;

  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : 'es';
}

export function t(key, lang) {
  return strings[lang]?.[key] ?? strings.es[key] ?? key;
}

/** Aplica un idioma a todo el documento. */
export function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = 'es';
  const dict = strings[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.title = dict['meta.title'];
  document.querySelector('meta[name="description"]')
    ?.setAttribute('content', dict['meta.description']);

  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* modo privado */ }

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  return lang;
}
