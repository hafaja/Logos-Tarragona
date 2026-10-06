# Web de l'Associació Logos – Projectes Socials

Web estàtic (HTML, CSS i JavaScript), sense dependències ni compilació.

## Pàgines
- `index.html` – Inici
- `que-fem.html` – Què fem (qualitat ISO, serveis, Logos Inserció, RSC)
- `projectes.html` – Projectes amb filtres i fitxes (dades a `assets/js/projectes-data.js`)
- `contacte.html` – Contacte i formulari únic (consulta, reunió o candidatura)
- `politica-galetes.html`, `gracies.html`

## Publicar a Netlify
1. Puja aquesta carpeta a un repositori de GitHub (per exemple `hafaja/logostgn-web`).
2. A Netlify: *Add new site → Import an existing project → GitHub* i tria el repositori. No cal cap ordre de compilació (publish directory: arrel).
3. El formulari de contacte funciona amb **Netlify Forms**: els missatges apareixen a *Site configuration → Forms*. Activa les notificacions per correu cap a info@logostgn.cat.
4. Quan estigui validat, a Nominalia apunta el domini a Netlify (no tocar els registres MX del correu).

## On canviar dades
- Telèfons, correu, adreça i xarxes: a la capçalera i el peu de cada pàgina.
- Projectes: `assets/js/projectes-data.js`.
- Fotos: `assets/img/fotos/` (versions de 800 i 1600 px en WebP).
