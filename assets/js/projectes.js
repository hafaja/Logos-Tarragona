/* Llista i fitxes de projectes */
(function () {
  "use strict";
  var P = window.LOGOS_PROJECTES || [];
  var LANG = (document.documentElement.lang || "ca").slice(0, 2), BASE = "", PFX = LANG === "ca" ? "" : LANG + "-";
  var TT = {
    ca: { work: "Vols treballar amb nosaltres?", amb: ["Tots", "Inserció", "Formació", "Bretxa digital", "Igualtat", "Inclusió"], card: "Veure la fitxa", all: "Tots els projectes", prev: "Anterior", next: "Següent", prevL: "Projecte anterior: ", nextL: "Projecte següent: ", join: "Vols participar o col·laborar?", acc: "Fes el teu tràmit amb Logos Acompanya", contact: "Contactar · 977 61 57 23", sup: "Amb el suport de", title: "Projectes – Associació Logos" },
    es: { work: "¿Quieres trabajar con nosotros?", amb: ["Todos", "Inserción", "Formación", "Brecha digital", "Igualdad", "Inclusión"], card: "Ver la ficha", all: "Todos los proyectos", prev: "Anterior", next: "Siguiente", prevL: "Proyecto anterior: ", nextL: "Proyecto siguiente: ", join: "¿Quieres participar o colaborar?", acc: "Haz tu trámite con Logos Acompanya", contact: "Contactar · 977 61 57 23", sup: "Con el apoyo de", title: "Proyectos – Associació Logos" },
    en: { work: "Want to work with us?", amb: ["All", "Employment", "Training", "Digital divide", "Equality", "Inclusion"], card: "View details", all: "All projects", prev: "Previous", next: "Next", prevL: "Previous project: ", nextL: "Next project: ", join: "Want to take part or collaborate?", acc: "Do your paperwork with Logos Acompanya", contact: "Contact · 977 61 57 23", sup: "Supported by", title: "Projects – Associació Logos" },
    fr: { work: "Vous voulez travailler avec nous ?", amb: ["Tous", "Insertion", "Formation", "Fracture numérique", "Égalité", "Inclusion"], card: "Voir la fiche", all: "Tous les projets", prev: "Précédent", next: "Suivant", prevL: "Projet précédent : ", nextL: "Projet suivant : ", join: "Vous voulez participer ou collaborer ?", acc: "Faites vos démarches avec Logos Acompanya", contact: "Contact · 977 61 57 23", sup: "Avec le soutien de", title: "Projets – Associació Logos" },
    ar: { work: "هل تريد العمل معنا؟", amb: ["الكل", "الإدماج المهني", "التدريب", "الفجوة الرقمية", "المساواة", "الإدماج الاجتماعي"], card: "عرض التفاصيل", all: "جميع المشاريع", prev: "السابق", next: "التالي", prevL: "المشروع السابق: ", nextL: "المشروع التالي: ", join: "هل تريد المشاركة أو التعاون؟", acc: "أنجز إجراءاتك مع Logos Acompanya", contact: "اتصل بنا · 977 61 57 23", sup: "بدعم من", title: "المشاريع – جمعية لوغوس" }
  };
  var T = TT[LANG] || TT.ca;
  var AMBITS = T.amb;
  var list = document.getElementById("llista"), grid = document.getElementById("graella"),
      filters = list.querySelector(".filters"), detail = document.getElementById("fitxa");
  var filter = AMBITS[0];
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var BASKET = '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16l-1.5 9h-13L4 11zM8 11V8a4 4 0 0 1 8 0v3M12 15v2"/></svg>';
  function pic(p, sizes) {
    if (!p.img) return '<div class="card__ph">' + BASKET + "</div>";
    return '<img src="' + BASE + 'assets/img/fotos/' + p.img + '-1600.webp" srcset="' + BASE + 'assets/img/fotos/' + p.img + '-800.webp 800w, ' + BASE + 'assets/img/fotos/' + p.img + '-1600.webp 1600w" sizes="' + sizes + '" alt="' + esc(p.alt) + '" loading="lazy">';
  }
  function renderFilters() {
    filters.innerHTML = AMBITS.map(function (a) {
      var n = a === AMBITS[0] ? P.length : P.filter(function (p) { return p.amb === a; }).length;
      return '<button class="filter" type="button" aria-pressed="' + (a === filter) + '" data-f="' + a + '">' + a + " <small>(" + n + ")</small></button>";
    }).join("");
    Array.prototype.forEach.call(filters.querySelectorAll(".filter"), function (b) {
      b.addEventListener("click", function () { filter = b.getAttribute("data-f"); renderFilters(); renderGrid(); });
    });
  }
  function renderGrid() {
    grid.innerHTML = P.filter(function (p) { return filter === AMBITS[0] || p.amb === filter; }).map(function (p) {
      return '<a class="card" href="#' + p.id + '">' + pic(p, "(max-width: 620px) 100vw, 33vw") +
        '<div class="card__body"><div class="tags"><span class="tag">' + esc(p.amb) + '</span><span class="tag tag--grey">' + esc(p.year) + "</span></div>" +
        "<h3>" + esc(p.title) + "</h3><p>" + esc(p.summary) + '</p><span class="card__more">' + T.card + '</span></div></a>';
    }).join("");
  }
  function renderDetail(p) {
    var i = P.indexOf(p), prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    var figs = p.figs.length ? '<div class="figs">' + p.figs.map(function (f) { return '<div class="fig"><b>' + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></div>"; }).join("") + "</div>" : "";
    var secs = p.secs.map(function (s) { return '<div class="box"><h3>' + esc(s.h) + '</h3><ul class="ticks">' + s.items.map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("") + "</ul></div>"; }).join("");
    var link = p.link ? '<p style="margin-top:18px"><a href="' + p.link[1] + '" target="_blank" rel="noopener" style="font-weight:700">' + esc(p.link[0]) + "</a></p>" : "";
    var sup = p.sup.length ? '<div class="support"><h3>' + T.sup + '</h3><div class="logo-grid" style="grid-template-columns:1fr 1fr">' + p.sup.map(function (s) { return '<div class="logo-tile"><img src="' + BASE + s.src + '" alt="' + esc(s.alt) + '" loading="lazy"></div>'; }).join("") + "</div></div>" : "";
    var photo = p.img ? pic(p, "(max-width: 900px) 100vw, 40vw") : '<div class="detail__ph">' + BASKET + "</div>";
    detail.innerHTML =
      '<div class="detail__nav"><a class="btn btn--line btn--sm" href="#">' + T.all + '</a><div style="display:flex;gap:10px"><a class="btn btn--line btn--sm" href="#' + prev.id + '" aria-label="' + T.prevL + esc(prev.title) + '">' + T.prev + '</a><a class="btn btn--line btn--sm" href="#' + next.id + '" aria-label="' + T.nextL + esc(next.title) + '">' + T.next + '</a></div></div>' +
      '<div class="detail"><article><div class="tags"><span class="tag">' + esc(p.amb) + '</span><span class="tag tag--grey">' + esc(p.year) + "</span></div>" +
      '<h2 id="fitxa-titol" tabindex="-1">' + esc(p.title) + '</h2><p class="detail__sub">' + esc(p.sub) + "</p>" +
      p.intro.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") + figs + secs + link + "</article>" +
      "<aside>" + photo + sup + '<div class="cta-box"><strong>' + T.join + '</strong><a class="btn btn--dark" href="https://logos-acompana-digitalmente.netlify.app">' + T.acc + '</a><a class="btn btn--line" href="' + PFX + 'contacte.html">' + T.contact + '</a><a class="cta-box__job" href="' + PFX + 'contacte.html?motiu=feina#formulari">' + T.work + ' →</a></div></aside></div>';
  }
  function route() {
    var id = location.hash.replace("#", ""), p = P.filter(function (x) { return x.id === id; })[0];
    if (p) {
      list.hidden = true; detail.hidden = false; renderDetail(p);
      document.title = p.title + " – " + T.title;
      detail.scrollIntoView({ block: "start" });
      var h = document.getElementById("fitxa-titol"); if (h) h.focus({ preventScroll: true });
    } else {
      detail.hidden = true; list.hidden = false;
      document.title = T.title;
    }
  }
  renderFilters(); renderGrid(); route();
  window.addEventListener("hashchange", route);
})();
