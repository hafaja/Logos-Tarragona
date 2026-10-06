/* Associació Logos – interaccions del web */
/* ===== CONFIGURACIÓ =====
   Enganxa aquí l'adreça del feed JSON de Behold (https://feeds.behold.so/XXXX)
   quan Logos hagi connectat el seu Instagram. Si queda buit, es mostra "Segueix-nos". */
var LOGOS_INSTAGRAM_FEED = "";

(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Menú: desplegables i mòbil ---------- */
  var navBtns = $$(".nav__btn");
  function closeMenus(except) {
    navBtns.forEach(function (b) {
      if (b === except) return;
      b.setAttribute("aria-expanded", "false");
      var dd = document.getElementById(b.getAttribute("aria-controls"));
      if (dd) dd.classList.remove("is-open");
    });
  }
  navBtns.forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = b.getAttribute("aria-expanded") === "true";
      closeMenus(b);
      b.setAttribute("aria-expanded", String(!open));
      document.getElementById(b.getAttribute("aria-controls")).classList.toggle("is-open", !open);
    });
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".nav__item")) closeMenus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenus(); closeSearch(); } });

  var menuToggle = $(".menu-toggle"), menu = $("#menu");
  if (menuToggle) menuToggle.addEventListener("click", function () {
    var open = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tancar el menú" : "Obrir el menú");
  });
  $$("#menu a").forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("is-open"); closeMenus(); }); });

  /* ---------- Cercador ---------- */
  var INDEX = [
    ["Tràmits", "Fer un tràmit amb Logos Acompanya", "https://logos-acompana-digitalmente.netlify.app", "tramit ajuda cita acompanya prestacio"],
    ["Formació", "Cursos i formació", "projectes.html", "curs cursos formacio taller digital actic catala"],
    ["Bretxa digital", "Logos Social Up Digital", "projectes.html#social-up", "bretxa digital idcat tramits internet ordinador"],
    ["Treball", "Orientació i inserció laboral", "que-fem.html", "feina treball ocupacio insercio orientacio cv"],
    ["Qualitat", "Certificat ISO 9001:2015", "que-fem.html#qualitat", "iso 9001 qualitat certificat bmc"],
    ["Administracions", "Sol·licitar una reunió", "contacte.html?motiu=reunio#formulari", "reunio administracio entitat projecte tecnic"],
    ["Qui som", "Història, missió i acreditacions", "index.html#qui-som", "historia missio aptos qui som registre"],
    ["Projectes", "Tots els projectes", "projectes.html", "projectes xaldiga dones igualtat menjar xama"],
    ["Contacte", "Telèfon, WhatsApp, correu i horari", "contacte.html", "contacte telefon whatsapp mobil correu email horari adreca mapa"],
    ["Treballa amb nosaltres", "Enviar la teva candidatura", "contacte.html?motiu=feina#formulari", "treballar feina oferta cv curriculum candidatura"],
    ["Col·laboracions", "Entitats amb qui treballem", "index.html#col-laboracions", "col·laboracions entitats xarxa unesco diputacio port"],
    ["Actualitat", "Últimes publicacions", "index.html#actualitat", "actualitat noticies novetats instagram facebook xarxes"],
    ["Galetes", "Política de galetes", "politica-galetes.html", "galetes cookies privacitat"]
  ];
  var searchBtn = $("[data-search-open]"), search = $("#cercador"), sInput = $("#cerca-input"), sList = $(".search__results");
  var norm = function (x) { return (x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/·/g, ""); };
  function renderSearch() {
    var q = norm(sInput.value).trim();
    var res = INDEX.filter(function (r) { return !q || norm(r.join(" ")).indexOf(q) !== -1; }).slice(0, 6);
    sList.innerHTML = res.length ? res.map(function (r) {
      return '<li><a href="' + r[2] + '"><small>' + r[0] + "</small>" + r[1] + "</a></li>";
    }).join("") : '<li style="grid-column:1/-1">No hem trobat res. <a href="contacte.html">Escriu-nos i t\'ajudem</a>.</li>';
  }
  function closeSearch() { if (search && !search.hidden) { search.hidden = true; searchBtn.setAttribute("aria-expanded", "false"); } }
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      var open = search.hidden;
      search.hidden = !open;
      searchBtn.setAttribute("aria-expanded", String(open));
      if (open) { renderSearch(); sInput.focus(); }
    });
    sInput.addEventListener("input", renderSearch);
    $$(".search__chips .chip").forEach(function (c) { c.addEventListener("click", function () { sInput.value = c.textContent; renderSearch(); sInput.focus(); }); });
  }

  /* ---------- Galetes ---------- */
  var KEY = "logos_consent", banner = $("#cookie"), modal = $("#cookie-modal");
  function readConsent() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function saveConsent(an, ext) {
    try { localStorage.setItem(KEY, JSON.stringify({ analitica: an, externs: ext, data: new Date().toISOString() })); } catch (e) {}
    banner.hidden = true; modal.hidden = true;
    /* Aquí s'activaria l'eina d'analítica només si an === true */
  }
  var consent = readConsent();
  if (!consent && banner) banner.hidden = false;
  $$("[data-cookie]").forEach(function (b) {
    b.addEventListener("click", function () {
      var a = b.getAttribute("data-cookie");
      if (a === "accept") saveConsent(true, true);
      else if (a === "reject") saveConsent(false, false);
      else saveConsent($("#ck-an").checked, $("#ck-ext").checked);
    });
  });
  $$("[data-cookie-config]").forEach(function (b) {
    b.addEventListener("click", function () {
      var c = readConsent() || {};
      $("#ck-an").checked = !!c.analitica; $("#ck-ext").checked = !!c.externs;
      modal.hidden = false; $("#ck-an").focus();
    });
  });
  $$("[data-cookie-close]").forEach(function (b) { b.addEventListener("click", function () { modal.hidden = true; }); });

  /* ---------- Àmbits (inici) ---------- */
  var ambData = $("#amb-data");
  if (ambData) {
    var A = JSON.parse(ambData.textContent), panel = $("#amb-panel");
    $$(".amb").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = +btn.getAttribute("data-amb"), d = A[i];
        $$(".amb").forEach(function (b) { var on = b === btn; b.setAttribute("aria-selected", String(on)); b.querySelector("em").textContent = on ? "Detall obert" : "Veure més"; });
        ["t", "txt", "who", "how", "proj"].forEach(function (k) { $('[data-f="' + k + '"]', panel).textContent = d[k]; });
        var im = $('[data-f="img"]', panel);
        im.src = "assets/img/fotos/" + d.img + "-1600.webp";
        im.srcset = "assets/img/fotos/" + d.img + "-800.webp 800w, assets/img/fotos/" + d.img + "-1600.webp 1600w";
        im.alt = d.alt;
        if (window.innerWidth < 1000) panel.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---------- Col·laboracions: mostrar totes ---------- */
  var more = $("#collab-more");
  if (more) {
    var total = more.textContent;
    more.addEventListener("click", function () {
      var open = more.getAttribute("aria-expanded") !== "true";
      $$("#collab-grid [data-extra]").forEach(function (t) { t.hidden = !open; });
      more.setAttribute("aria-expanded", String(open));
      more.textContent = open ? "Mostrar menys" : total;
    });
  }


  /* ---------- Actualitat: publicacions d'Instagram (Behold) ---------- */
  var feedBox = $("#insta-feed");
  if (feedBox && LOGOS_INSTAGRAM_FEED) {
    var esc = function (t) { return String(t || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    var fmt = function (iso) { try { return new Date(iso).toLocaleDateString("ca-ES", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; } };
    fetch(LOGOS_INSTAGRAM_FEED).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (data) {
      var posts = (data.posts || []).slice(0, 3);
      if (!posts.length) return;
      var html = posts.map(function (p) {
        var src = (p.sizes && p.sizes.medium && p.sizes.medium.mediaUrl) || p.thumbnailUrl || p.mediaUrl;
        var text = (p.prunedCaption || p.caption || "").replace(/\s+/g, " ").trim();
        if (text.length > 150) text = text.slice(0, 147).replace(/\s+\S*$/, "") + "…";
        return '<a class="card" href="' + esc(p.permalink) + '" target="_blank" rel="noopener">' +
          '<img src="' + esc(src) + '" alt="' + esc(text ? "Publicació: " + text.slice(0, 90) : "Publicació de Logos a Instagram") + '" loading="lazy" style="aspect-ratio:1/1;object-fit:cover;width:100%">' +
          '<div class="card__body"><div class="tags"><span class="tag">Instagram</span><span class="tag tag--grey">' + fmt(p.timestamp) + "</span></div>" +
          "<p>" + esc(text) + '</p><span class="card__more">Veure a Instagram</span></div></a>';
      }).join("");
      feedBox.insertAdjacentHTML("afterbegin", html);
    }).catch(function () { /* si falla, queda el bloc "Segueix-nos" */ });
  }

  /* ---------- Formulari de contacte ---------- */
  var form = $("#formulari");
  if (form) {
    var params = new URLSearchParams(location.search), m = params.get("motiu");
    if (m === "reunio") $("#m-reunio").checked = true;
    if (m === "feina") $("#m-feina").checked = true;
    var label = $("#c-msg-label"), send = $("#c-send");
    var TXT = {
      "Consulta general": ["La teva consulta", "Enviar la consulta"],
      "Sol·licitar una reunió": ["Expliqueu-nos el projecte o la necessitat", "Sol·licitar la reunió"],
      "Treballar amb nosaltres": ["Explica'ns el teu perfil i què t'interessa (pots adjuntar el CV per correu)", "Enviar la candidatura"]
    };
    function sync() {
      var v = $("input[name=motiu]:checked").value;
      $$(".org").forEach(function (o) { o.hidden = v !== "Sol·licitar una reunió"; });
      label.textContent = TXT[v][0]; send.textContent = TXT[v][1];
    }
    $$("input[name=motiu]").forEach(function (r) { r.addEventListener("change", sync); });
    sync();
  }
})();
