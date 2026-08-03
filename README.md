# BiotaScope — landing

Landing comercial de BiotaScope. HTML, CSS y JavaScript puros: sin build, sin dependencias, sin `node_modules`. Lo que hay en esta carpeta es exactamente lo que se publica.

```
landing/
├── index.html          # estructura de la página
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

## Conectar el formulario

Ahora mismo el formulario valida los campos pero **no envía nada**: al pulsar “Enviar consulta” muestra un aviso pidiendo que escriban a `angel@biotascope.com`.

Para activarlo con [Formspree](https://formspree.io):

1. En `index.html`, pon tu endpoint en el `action` del formulario:
   ```html
   <form class="form" id="contactForm" action="https://formspree.io/f/TU_ID" method="POST" novalidate>
   ```
2. En `assets/main.js`, dentro de `initForm()`, borra el bloque de cuatro líneas marcado con comentarios al final del `submit`.

Con Netlify Forms es lo mismo, pero añadiendo el atributo `netlify` al `<form>` en vez del `action`.

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
