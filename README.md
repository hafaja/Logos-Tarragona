# Web de l'Associació Logos – Projectes Socials

Web estàtic (HTML, CSS i JavaScript), sense dependències ni compilació.

## Pàgines
- `index.html` – Inici
- `que-fem.html` – Què fem (qualitat ISO, serveis, Logos Inserció, RSC)
- `projectes.html` – Projectes amb filtres i fitxes (dades a `assets/js/projectes-data.js`)
- `contacte.html` – Contacte i formulari únic (consulta, reunió o candidatura)
- `politica-galetes.html`, `gracies.html`

## Publicar a GitHub Pages
1. Puja els fitxers al repositori (màxim 100 fitxers per pujada: fes-ho per tandes).
2. A GitHub: *Settings → Pages → Branch: main / (root) → Save*. En un minut la web és a `https://USUARI.github.io/REPOSITORI/`.
3. El fitxer `.nojekyll` evita que GitHub modifiqui els fitxers.
4. Formulari de contacte: funciona amb **FormSubmit** i arriba a info@logostgn.cat. El primer missatge envia un correu de confirmació a aquesta adreça: cal clicar «Activate» una sola vegada.
5. Domini propi (logostgn.cat): a *Settings → Pages → Custom domain*, i a Nominalia apuntar el domini als servidors de GitHub Pages (sense tocar els registres MX del correu).

## On canviar dades
- Telèfons, correu, adreça i xarxes: a la capçalera i el peu de cada pàgina.
- Projectes: `assets/js/projectes-data.js`.
- Fotos: `assets/img/fotos/` (versions de 800 i 1600 px en WebP).

## Idiomes
- Tots els fitxers són a l'arrel, sense carpetes d'idioma (per pujar-los fàcilment a GitHub).
- Català: `index.html`, `que-fem.html`… · Castellà: `es-index.html`… · Anglès: `en-…` · Francès: `fr-…` · Àrab (dreta a esquerra): `ar-…`.
- Textos de JavaScript: `assets/js/main.js` i `assets/js/projectes.js`. Dades de projectes per idioma: `assets/js/projectes-data-XX.js`.
