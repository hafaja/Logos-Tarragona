/* Llista i fitxes de projectes */
(function () {
  "use strict";
  var P = window.LOGOS_PROJECTES || [];
  var AMBITS = ["Tots", "Inserció", "Formació", "Bretxa digital", "Igualtat", "Inclusió"];
  var list = document.getElementById("llista"), grid = document.getElementById("graella"),
      filters = list.querySelector(".filters"), detail = document.getElementById("fitxa");
  var filter = "Tots";
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var BASKET = '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16l-1.5 9h-13L4 11zM8 11V8a4 4 0 0 1 8 0v3M12 15v2"/></svg>';
  function pic(p, sizes) {
    if (!p.img) return '<div class="card__ph">' + BASKET + "</div>";
    return '<img src="assets/img/fotos/' + p.img + '-1600.webp" srcset="assets/img/fotos/' + p.img + '-800.webp 800w, assets/img/fotos/' + p.img + '-1600.webp 1600w" sizes="' + sizes + '" alt="' + esc(p.alt) + '" loading="lazy">';
  }
  function renderFilters() {
    filters.innerHTML = AMBITS.map(function (a) {
      var n = a === "Tots" ? P.length : P.filter(function (p) { return p.amb === a; }).length;
      return '<button class="filter" type="button" aria-pressed="' + (a === filter) + '" data-f="' + a + '">' + a + " <small>(" + n + ")</small></button>";
    }).join("");
    Array.prototype.forEach.call(filters.querySelectorAll(".filter"), function (b) {
      b.addEventListener("click", function () { filter = b.getAttribute("data-f"); renderFilters(); renderGrid(); });
    });
  }
  function renderGrid() {
    grid.innerHTML = P.filter(function (p) { return filter === "Tots" || p.amb === filter; }).map(function (p) {
      return '<a class="card" href="#' + p.id + '">' + pic(p, "(max-width: 620px) 100vw, 33vw") +
        '<div class="card__body"><div class="tags"><span class="tag">' + esc(p.amb) + '</span><span class="tag tag--grey">' + esc(p.year) + "</span></div>" +
        "<h3>" + esc(p.title) + "</h3><p>" + esc(p.summary) + '</p><span class="card__more">Veure la fitxa</span></div></a>';
    }).join("");
  }
  function renderDetail(p) {
    var i = P.indexOf(p), prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    var figs = p.figs.length ? '<div class="figs">' + p.figs.map(function (f) { return '<div class="fig"><b>' + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></div>"; }).join("") + "</div>" : "";
    var secs = p.secs.map(function (s) { return '<div class="box"><h3>' + esc(s.h) + '</h3><ul class="ticks">' + s.items.map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("") + "</ul></div>"; }).join("");
    var link = p.link ? '<p style="margin-top:18px"><a href="' + p.link[1] + '" target="_blank" rel="noopener" style="font-weight:700">' + esc(p.link[0]) + "</a></p>" : "";
    var sup = p.sup.length ? '<div class="support"><h3>Amb el suport de</h3><div class="logo-grid" style="grid-template-columns:1fr 1fr">' + p.sup.map(function (s) { return '<div class="logo-tile"><img src="' + s.src + '" alt="' + esc(s.alt) + '" loading="lazy"></div>'; }).join("") + "</div></div>" : "";
    var photo = p.img ? pic(p, "(max-width: 900px) 100vw, 40vw") : '<div class="detail__ph">' + BASKET + "</div>";
    detail.innerHTML =
      '<div class="detail__nav"><a class="btn btn--line btn--sm" href="#">Tots els projectes</a><div style="display:flex;gap:10px"><a class="btn btn--line btn--sm" href="#' + prev.id + '" aria-label="Projecte anterior: ' + esc(prev.title) + '">Anterior</a><a class="btn btn--line btn--sm" href="#' + next.id + '" aria-label="Projecte següent: ' + esc(next.title) + '">Següent</a></div></div>' +
      '<div class="detail"><article><div class="tags"><span class="tag">' + esc(p.amb) + '</span><span class="tag tag--grey">' + esc(p.year) + "</span></div>" +
      '<h2 id="fitxa-titol" tabindex="-1">' + esc(p.title) + '</h2><p class="detail__sub">' + esc(p.sub) + "</p>" +
      p.intro.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + figs + secs + link + "</article>" +
      "<aside>" + photo + sup + '<div class="cta-box"><strong>Vols participar o col·laborar?</strong><a class="btn btn--dark" href="https://logos-acompana-digitalmente.netlify.app">Fes el teu tràmit amb Logos Acompanya</a><a class="btn btn--line" href="contacte.html">Contactar · 977 61 57 23</a></div></aside></div>';
  }
  function route() {
    var id = location.hash.replace("#", ""), p = P.filter(function (x) { return x.id === id; })[0];
    if (p) {
      list.hidden = true; detail.hidden = false; renderDetail(p);
      document.title = p.title + " – Projectes – Associació Logos";
      detail.scrollIntoView({ block: "start" });
      var h = document.getElementById("fitxa-titol"); if (h) h.focus({ preventScroll: true });
    } else {
      detail.hidden = true; list.hidden = false;
      document.title = "Projectes – Associació Logos";
    }
  }
  renderFilters(); renderGrid(); route();
  window.addEventListener("hashchange", route);
})();
