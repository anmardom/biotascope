/**
 * BiotaScope — comportamiento de la landing.
 * Sin dependencias. Se carga como módulo ES desde index.html.
 */

import { applyLang, detectLang, t } from './i18n.js';

let currentLang = 'es';

/* ── Idioma ───────────────────────────────────────────────── */
function initLang() {
  const button = document.getElementById('langSwitch');
  const label = document.getElementById('langLabel');

  const setLang = (lang) => {
    currentLang = applyLang(lang);
    // La etiqueta muestra el idioma AL QUE se cambiaría, no el actual.
    if (label) label.textContent = currentLang === 'es' ? 'EN' : 'ES';
    button?.setAttribute('aria-label',
      currentLang === 'es' ? 'Switch to English' : 'Cambiar a español');
  };

  setLang(detectLang());
  button?.addEventListener('click', () => setLang(currentLang === 'es' ? 'en' : 'es'));
}

/* ── Navegación ───────────────────────────────────────────── */
function initNav() {
  const header = document.getElementById('siteHeader');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  const closeMenu = () => {
    menu?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };

  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('is-open')) {
      closeMenu();
      toggle?.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!menu?.classList.contains('is-open')) return;
    if (!menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  // Sombra del header solo cuando se ha hecho scroll.
  const onScroll = () => header?.classList.toggle('is-stuck', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // El menú móvil no debe quedarse abierto al volver a escritorio.
  window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);
}

/* ── Aparición al hacer scroll ────────────────────────────── */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    // El escalonado cuenta solo los elementos que entran, no todas las entradas
    // del observer, y se corta a los 5: si no, los últimos tardarían segundos.
    let shown = 0;
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('is-visible'), Math.min(shown++, 5) * 70);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  items.forEach((el) => observer.observe(el));
}

/* ── Lightbox ─────────────────────────────────────────────── */
function initLightbox() {
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lbImage');
  const caption = document.getElementById('lbCaption');
  const buttons = [...document.querySelectorAll('.gallery-btn')];
  if (!dialog || !buttons.length) return;

  let index = 0;
  let opener = null;

  const render = () => {
    const btn = buttons[index];
    const img = btn.querySelector('img');
    image.src = btn.dataset.full;
    image.alt = img?.alt || '';
    caption.textContent = t(btn.dataset.captionKey, currentLang);
  };

  const open = (i, trigger) => {
    index = i;
    opener = trigger;
    render();
    dialog.showModal();
  };

  const step = (delta) => {
    index = (index + delta + buttons.length) % buttons.length;
    render();
  };

  buttons.forEach((btn, i) => btn.addEventListener('click', () => open(i, btn)));

  document.getElementById('lbClose')?.addEventListener('click', () => dialog.close());
  document.getElementById('lbPrev')?.addEventListener('click', () => step(-1));
  document.getElementById('lbNext')?.addEventListener('click', () => step(1));

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });

  // Clic fuera de la figura cierra el visor.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });

  // Esc lo gestiona <dialog>; aquí solo devolvemos el foco.
  dialog.addEventListener('close', () => {
    image.removeAttribute('src'); // src="" haría que el navegador pidiera la página
    opener?.focus();
  });

  // Si se cambia de idioma con el visor abierto, traduce el pie.
  document.addEventListener('langchange', () => {
    if (dialog.open) caption.textContent = t(buttons[index].dataset.captionKey, currentLang);
  });
}

/* ── Formulario ───────────────────────────────────────────── */
function initForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  const controls = [...form.querySelectorAll('[required]')];

  const errorFor = (control) =>
    (control.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .map((id) => document.getElementById(id))
      .find((el) => el?.classList.contains('field-error')) || null;

  const validate = (control) => {
    const ok = control.checkValidity();
    const error = errorFor(control);
    control.setAttribute('aria-invalid', String(!ok));
    error?.classList.toggle('is-shown', !ok);
    return ok;
  };

  // Solo se revalida en vivo una vez que el campo ya ha fallado: menos ruido.
  controls.forEach((control) => {
    control.addEventListener('blur', () => {
      if (control.getAttribute('aria-invalid') !== null) validate(control);
    });
    control.addEventListener('input', () => {
      if (control.getAttribute('aria-invalid') === 'true') validate(control);
    });
  });

  form.addEventListener('submit', (e) => {
    const results = controls.map(validate);
    const valid = results.every(Boolean);

    if (!valid) {
      e.preventDefault();
      status.textContent = t('form.status.invalid', currentLang);
      status.classList.add('is-shown', 'is-error');
      controls.find((c) => c.getAttribute('aria-invalid') === 'true')?.focus();
      return;
    }

    // ─────────────────────────────────────────────────────────
    // El formulario aún no está conectado a ningún backend.
    // Cuando añadas un `action` (Formspree, Netlify Forms…),
    // BORRA las cuatro líneas siguientes para que el envío ocurra.
    e.preventDefault();
    status.textContent = t('form.status.pending', currentLang);
    status.classList.add('is-shown');
    status.classList.remove('is-error');
    // ─────────────────────────────────────────────────────────
  });

  // El mensaje de estado deja de tener sentido tras cambiar de idioma.
  document.addEventListener('langchange', () => {
    status.textContent = '';
    status.classList.remove('is-shown', 'is-error');
  });
}

/* ── Arranque ─────────────────────────────────────────────── */
initLang();
initNav();
initReveal();
initLightbox();
initForm();
