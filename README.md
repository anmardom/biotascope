# BiotaScope — landing

Landing comercial de BiotaScope. HTML, CSS y JavaScript puros, sin build. La única dependencia es `nodemailer`, que usa la función del formulario (`api/`) y que Vercel instala solo.

```
landing/
├── index.html          # estructura de la página
├── api/contact.js      # envío del formulario (Vercel → SMTP de IONOS)
├── assets/
│   ├── styles.css      # estilos
│   ├── i18n.js         # todos los textos (español e inglés)
│   ├── main.js         # menú, animaciones, visor de imágenes, formulario
│   └── img/            # figuras de resultados (.png + .webp)
└── README.md
```

Secciones: hero → servicios → resultados → sobre BiotaScope → contacto → pie.

## Verla en local

Los `.js` se cargan como módulos, así que abrir `index.html` con doble clic no funciona. Hay que servirla:

```bash
npx serve .
```

Y abrir la dirección que indique (por defecto `http://localhost:3000`).

## Editar los textos

Todo el copy está en **`assets/i18n.js`**, no en el HTML. Busca la clave, cambia el texto en el bloque `es:` y en el `en:`, y recarga.

```js
'hero.title': 'De secuencias crudas a resultados que puedes publicar',
```

## Formulario de contacto

El formulario envía a `api/contact.js`, una función serverless de Vercel que manda el mensaje por el SMTP de IONOS (`smtp.ionos.es:465`). El correo llega desde tu propio buzón y con *Reply-To* del visitante, así que basta con pulsar “Responder”.

Configura en Vercel → *Settings → Environment Variables* y vuelve a desplegar:

| Variable    | Valor                                         |
|-------------|-----------------------------------------------|
| `SMTP_USER` | buzón de IONOS, p. ej. `angel@biotascope.com` |
| `SMTP_PASS` | contraseña de ese buzón                       |
| `MAIL_TO`   | *(opcional)* otro destinatario                |

Si falla, mira los logs de la función en Vercel (*Deployments → Functions*). Para probarlo en local usa `npx vercel dev` (con `npx serve` la función no existe).

## Publicar

Arrastra la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop), o súbela a un repositorio y activa GitHub Pages (Settings → Pages → Source: `main` / `root`).

Si la publicas en una URL distinta de `https://biotascope.com/`, actualiza el `<link rel="canonical">` del `<head>`.

## Añadir una figura

Las imágenes están en dos formatos: `.webp` (la que sirve el navegador) y `.png` (respaldo). Para añadir una nueva, genera ambas y copia un bloque `<li class="gallery-item">` en la sección `#resultados`, cambiando rutas, `alt`, `width`/`height` y la clave del pie de foto.

```bash
npx sharp-cli -i figura.png -o assets/img -f webp -q 82 resize 1600 --withoutEnlargement
npx sharp-cli -i figura.png -o assets/img -f png  resize 1600 --withoutEnlargement
```

## Pendiente de revisar

El copy del hero (“resultados que puedes publicar”) y el de la sección *Sobre BiotaScope* son propuestas: repásalos antes de publicar para que digan exactamente lo que quieres prometer. No hay precios, plazos ni clientes inventados en ninguna parte de la página.
