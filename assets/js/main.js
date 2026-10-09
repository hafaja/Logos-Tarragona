/* Associació Logos – interaccions del web */
/* ===== CONFIGURACIÓ =====
   Enganxa aquí l'adreça del feed JSON de Behold (https://feeds.behold.so/XXXX)
   quan Logos hagi connectat el seu Instagram. Si queda buit, es mostra "Segueix-nos". */
var LOGOS_INSTAGRAM_FEED = "";

var LOGOS_LANG = (document.documentElement.lang || "ca").slice(0, 2);
var LOGOS_BASE = "";
var LOGOS_PFX = LOGOS_LANG === "ca" ? "" : LOGOS_LANG + "-";

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
  var INDEX_ALL = {
    ca: [
      ["Tràmits", "Fer un tràmit amb Logos Acompanya", "https://logos-acompana-digitalmente.netlify.app", "tramit ajuda cita acompanya prestacio"],
      ["Formació", "Cursos i formació", "projectes.html", "curs cursos formacio taller digital actic catala"],
      ["Bretxa digital", "Logos Social Up Digital", "projectes.html#social-up", "bretxa digital idcat tramits internet ordinador"],
      ["Treball", "Orientació i inserció laboral", "que-fem.html", "feina treball ocupacio insercio orientacio cv"],
      ["Qualitat", "Certificat ISO 9001:2015", "index.html#qualitat-inici", "iso 9001 qualitat certificat bmc"],
      ["Administracions", "Sol·licitar una reunió", "contacte.html?motiu=reunio#formulari", "reunio administracio entitat projecte tecnic"],
      ["Qui som", "Història, missió i acreditacions", "index.html#qui-som", "historia missio aptos qui som registre"],
      ["Projectes", "Tots els projectes", "projectes.html", "projectes xaldiga dones igualtat menjar xama"],
      ["Contacte", "Telèfon, WhatsApp, correu i horari", "contacte.html", "contacte telefon whatsapp mobil correu email horari adreca mapa"],
      ["Treballa amb nosaltres", "Enviar la teva candidatura", "contacte.html?motiu=feina#formulari", "treballar feina oferta cv curriculum candidatura"],
      ["Col·laboracions", "Entitats amb qui treballem", "index.html#col-laboracions", "col·laboracions entitats xarxa unesco diputacio port"],
      ["Actualitat", "Últimes publicacions", "index.html#actualitat", "actualitat noticies novetats instagram facebook xarxes"],
      ["Galetes", "Política de galetes", "politica-galetes.html", "galetes cookies privacitat"]
    ],
    es: [
      ["Trámites", "Hacer un trámite con Logos Acompanya", "https://logos-acompana-digitalmente.netlify.app", "tramite ayuda cita acompanya prestacion"],
      ["Formación", "Cursos y formación", "projectes.html", "curso cursos formacion taller digital actic catalan"],
      ["Brecha digital", "Logos Social Up Digital", "projectes.html#social-up", "brecha digital idcat tramites internet ordenador"],
      ["Empleo", "Orientación e inserción laboral", "que-fem.html", "empleo trabajo insercion orientacion cv"],
      ["Calidad", "Certificado ISO 9001:2015", "index.html#qualitat-inici", "iso 9001 calidad certificado bmc"],
      ["Administraciones", "Solicitar una reunión", "contacte.html?motiu=reunio#formulari", "reunion administracion entidad proyecto tecnico"],
      ["Quiénes somos", "Historia, misión y acreditaciones", "index.html#qui-som", "historia mision aptos quienes somos registro"],
      ["Proyectos", "Todos los proyectos", "projectes.html", "proyectos xaldiga mujeres igualdad alimentos xama"],
      ["Contacto", "Teléfono, WhatsApp, correo y horario", "contacte.html", "contacto telefono whatsapp movil correo email horario direccion mapa"],
      ["Trabaja con nosotros", "Enviar tu candidatura", "contacte.html?motiu=feina#formulari", "trabajar empleo oferta cv curriculum candidatura"],
      ["Colaboraciones", "Entidades con las que trabajamos", "index.html#col-laboracions", "colaboraciones entidades red unesco diputacion puerto"],
      ["Actualidad", "Últimas publicaciones", "index.html#actualitat", "actualidad noticias novedades instagram facebook redes"],
      ["Cookies", "Política de cookies", "politica-galetes.html", "cookies privacidad"]
    ],
    en: [
      ["Paperwork", "Do your paperwork with Logos Acompanya", "https://logos-acompana-digitalmente.netlify.app", "paperwork procedure help appointment acompanya benefit"],
      ["Training", "Courses and training", "projectes.html", "course courses training workshop digital actic catalan"],
      ["Digital divide", "Logos Social Up Digital", "projectes.html#social-up", "digital divide idcat online internet computer"],
      ["Employment", "Career guidance and job placement", "que-fem.html", "job work employment guidance cv"],
      ["Quality", "ISO 9001:2015 certificate", "index.html#qualitat-inici", "iso 9001 quality certificate bmc"],
      ["Public bodies", "Request a meeting", "contacte.html?motiu=reunio#formulari", "meeting administration organisation project technical"],
      ["About us", "History, mission and accreditations", "index.html#qui-som", "history mission aptos about register"],
      ["Projects", "All projects", "projectes.html", "projects xaldiga women equality food xama"],
      ["Contact", "Phone, WhatsApp, email and opening hours", "contacte.html", "contact phone whatsapp mobile email hours address map"],
      ["Work with us", "Send your application", "contacte.html?motiu=feina#formulari", "work job vacancy cv resume application"],
      ["Partnerships", "Organisations we work with", "index.html#col-laboracions", "partnerships organisations network unesco"],
      ["News", "Latest posts", "index.html#actualitat", "news updates instagram facebook social media"],
      ["Cookies", "Cookie policy", "politica-galetes.html", "cookies privacy"]
    ],
    fr: [
      ["Démarches", "Faire une démarche avec Logos Acompanya", "https://logos-acompana-digitalmente.netlify.app", "demarche aide rendez-vous acompanya prestation"],
      ["Formation", "Cours et formations", "projectes.html", "cours formation atelier numerique actic catalan"],
      ["Fracture numérique", "Logos Social Up Digital", "projectes.html#social-up", "fracture numerique idcat internet ordinateur"],
      ["Emploi", "Orientation et insertion professionnelle", "que-fem.html", "emploi travail insertion orientation cv"],
      ["Qualité", "Certificat ISO 9001:2015", "index.html#qualitat-inici", "iso 9001 qualite certificat bmc"],
      ["Administrations", "Demander un rendez-vous", "contacte.html?motiu=reunio#formulari", "reunion rendez-vous administration organisme projet"],
      ["Qui sommes-nous", "Histoire, mission et accréditations", "index.html#qui-som", "histoire mission aptos qui sommes nous registre"],
      ["Projets", "Tous les projets", "projectes.html", "projets xaldiga femmes egalite alimentation xama"],
      ["Contact", "Téléphone, WhatsApp, e-mail et horaires", "contacte.html", "contact telephone whatsapp portable email horaires adresse carte"],
      ["Travailler avec nous", "Envoyer votre candidature", "contacte.html?motiu=feina#formulari", "travailler emploi offre cv candidature"],
      ["Collaborations", "Organismes partenaires", "index.html#col-laboracions", "collaborations organismes reseau unesco"],
      ["Actualités", "Dernières publications", "index.html#actualitat", "actualites nouvelles instagram facebook reseaux"],
      ["Cookies", "Politique de cookies", "politica-galetes.html", "cookies confidentialite"]
    ],
    ar: [
      ["الإجراءات", "أنجز إجراءاتك مع Logos Acompanya", "https://logos-acompana-digitalmente.netlify.app", "اجراء اجراءات مساعدة موعد منحة acompanya"],
      ["التدريب", "الدورات والتدريب", "projectes.html", "دورة دورات تدريب ورشة رقمي actic كتالونية"],
      ["الفجوة الرقمية", "Logos Social Up Digital", "projectes.html#social-up", "الفجوة الرقمية idcat انترنت حاسوب"],
      ["التشغيل", "التوجيه والإدماج المهني", "que-fem.html", "عمل شغل وظيفة توجيه سيرة"],
      ["الجودة", "شهادة ISO 9001:2015", "index.html#qualitat-inici", "iso 9001 جودة شهادة"],
      ["الإدارات", "اطلب موعدًا", "contacte.html?motiu=reunio#formulari", "موعد اجتماع ادارة جهة مشروع"],
      ["من نحن", "التاريخ والمهمة والاعتمادات", "index.html#qui-som", "تاريخ مهمة من نحن سجل"],
      ["المشاريع", "جميع المشاريع", "projectes.html", "مشاريع نساء مساواة غذاء xama xaldiga"],
      ["اتصل بنا", "الهاتف وواتساب والبريد وأوقات الدوام", "contacte.html", "اتصال هاتف واتساب جوال بريد دوام عنوان خريطة"],
      ["اعمل معنا", "أرسل طلبك", "contacte.html?motiu=feina#formulari", "عمل وظيفة توظيف سيرة طلب"],
      ["الشراكات", "الجهات التي نعمل معها", "index.html#col-laboracions", "شراكات جهات شبكة"],
      ["المستجدات", "آخر المنشورات", "index.html#actualitat", "مستجدات اخبار انستغرام فيسبوك شبكات"],
      ["ملفات تعريف الارتباط", "سياسة ملفات تعريف الارتباط", "politica-galetes.html", "كوكيز خصوصية"]
    ]
  };
  var INDEX = INDEX_ALL[LOGOS_LANG] || INDEX_ALL.ca;
  var UI = {
    ca: { noRes: "No hem trobat res.", write: "Escriu-nos i t'ajudem", less: "Mostrar menys",
      form: { "Consulta general": ["La teva consulta", "Enviar la consulta"], "Sol·licitar una reunió": ["Expliqueu-nos el projecte o la necessitat", "Sol·licitar la reunió"], "Treballar amb nosaltres": ["Explica'ns el teu perfil i què t'interessa (pots adjuntar el CV per correu)", "Enviar la candidatura"] } },
    es: { noRes: "No hemos encontrado nada.", write: "Escríbenos y te ayudamos", less: "Mostrar menos",
      form: { "Consulta general": ["Tu consulta", "Enviar la consulta"], "Sol·licitar una reunió": ["Explicadnos el proyecto o la necesidad", "Solicitar la reunión"], "Treballar amb nosaltres": ["Explícanos tu perfil y qué te interesa (puedes adjuntar el CV por correo)", "Enviar la candidatura"] } }
    ,en: { noRes: "Nothing found.", write: "Write to us and we'll help", less: "Show less",
      form: { "Consulta general": ["Your enquiry", "Send enquiry"], "Sol·licitar una reunió": ["Tell us about the project or need", "Request the meeting"], "Treballar amb nosaltres": ["Tell us about your profile and interests (you can email us your CV)", "Send application"] } }
    ,fr: { noRes: "Aucun résultat.", write: "Écrivez-nous, nous vous aiderons", less: "Afficher moins",
      form: { "Consulta general": ["Votre demande", "Envoyer la demande"], "Sol·licitar una reunió": ["Présentez-nous le projet ou le besoin", "Demander le rendez-vous"], "Treballar amb nosaltres": ["Parlez-nous de votre profil et de vos intérêts (vous pouvez envoyer votre CV par e-mail)", "Envoyer la candidature"] } }
    ,ar: { noRes: "لم نجد أي نتيجة.", write: "اكتب لنا وسنساعدك", less: "عرض أقل",
      form: { "Consulta general": ["استفسارك", "إرسال الاستفسار"], "Sol·licitar una reunió": ["اشرحوا لنا المشروع أو الحاجة", "طلب الموعد"], "Treballar amb nosaltres": ["حدّثنا عن ملفك المهني واهتماماتك (يمكنك إرسال سيرتك الذاتية بالبريد الإلكتروني)", "إرسال الطلب"] } }
  };
  var U = UI[LOGOS_LANG] || UI.ca;

  var searchBtn = $("[data-search-open]"), search = $("#cercador"), sInput = $("#cerca-input"), sList = $(".search__results");
  var norm = function (x) { return (x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/·/g, ""); };
  function renderSearch() {
    var q = norm(sInput.value).trim();
    var res = INDEX.filter(function (r) { return !q || norm(r.join(" ")).indexOf(q) !== -1; }).slice(0, 6);
    sList.innerHTML = res.length ? res.map(function (r) {
      return '<li><a href="' + (/^https?:/.test(r[2]) ? r[2] : LOGOS_PFX + r[2]) + '"><small>' + r[0] + "</small>" + r[1] + "</a></li>";
    }).join("") : '<li style="grid-column:1/-1">' + U.noRes + ' <a href="' + LOGOS_PFX + 'contacte.html">' + U.write + "</a>.</li>";
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
        $$(".amb").forEach(function (b) { var on = b === btn; b.setAttribute("aria-selected", String(on)); });
        ["t", "txt", "who", "how", "proj"].forEach(function (k) { $('[data-f="' + k + '"]', panel).textContent = d[k]; });
        var im = $('[data-f="img"]', panel);
        var F = LOGOS_BASE + "assets/img/fotos/" + d.img;
        im.src = F + "-1600.webp";
        im.srcset = F + "-800.webp 800w, " + F + "-1600.webp 1600w";
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
      more.textContent = open ? U.less : total;
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
    var TXT = U.form;

    function sync() {
      var v = $("input[name=motiu]:checked").value;
      $$(".org").forEach(function (o) { o.hidden = v !== "Sol·licitar una reunió"; });
      label.textContent = TXT[v][0]; send.textContent = TXT[v][1];
    }
    $$("input[name=motiu]").forEach(function (r) { r.addEventListener("change", sync); });
    form.addEventListener("submit", function () {
      var v = $("input[name=motiu]:checked").value;
      form.querySelector("[name=_next]").value = new URL(LOGOS_PFX + "gracies.html", location.href).href;
      form.querySelector("[name=_subject]").value = "Web Logos – " + v;
      form.querySelector("[name=idioma]").value = LOGOS_LANG.toUpperCase();
      form.querySelectorAll(".org[hidden] input, .org[hidden] select").forEach(function (f) { f.disabled = true; });
    });
    sync();
  }
})();

/* ===== Carrusel automàtic: Xarxes i plataformes (amb pausa) ===== */
(function () {
  var track = document.querySelector("#membres .members");
  if (!track) return;
  var L = {
    ca: ["Anterior", "Següent", "Pausa", "Reprendre", "Xarxes i plataformes"],
    es: ["Anterior", "Siguiente", "Pausa", "Reanudar", "Redes y plataformas"],
    en: ["Previous", "Next", "Pause", "Play", "Networks and platforms"],
    fr: ["Précédent", "Suivant", "Pause", "Reprendre", "Réseaux et plateformes"],
    ar: ["السابق", "التالي", "إيقاف مؤقت", "استئناف", "الشبكات والمنصات"]
  }[LOGOS_LANG] || null;
  L = L || ["Anterior", "Següent", "Pausa", "Reprendre", "Xarxes"];
  var rtl = document.documentElement.dir === "rtl";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  track.classList.add("members--carousel");
  track.setAttribute("tabindex", "0");
  track.setAttribute("aria-label", L[4]);
  var ico = function (d) { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>'; };
  var PAUSE = "M9 5v14M15 5v14", PLAY = "M8 5l11 7-11 7z";
  var bar = document.createElement("div");
  bar.className = "carousel-ctrl";
  bar.innerHTML =
    '<button type="button" class="carousel-btn" data-dir="-1" aria-label="' + L[0] + '">' + ico("M15 6l-6 6 6 6") + '</button>' +
    '<button type="button" class="carousel-btn carousel-btn--play" aria-label="' + L[2] + '">' + ico(PAUSE) + '</button>' +
    '<button type="button" class="carousel-btn" data-dir="1" aria-label="' + L[1] + '">' + ico("M9 6l6 6-6 6") + '</button>';
  track.parentNode.insertBefore(bar, track.nextSibling);
  var playBtn = bar.querySelector(".carousel-btn--play");
  var userPaused = reduce, hover = false, timer = null;

  function step() {
    var card = track.querySelector(".member");
    if (!card) return 0;
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
  }
  function go(dir) {
    var max = track.scrollWidth - track.clientWidth;
    var pos = Math.abs(track.scrollLeft);
    var s = rtl ? -1 : 1;
    if (dir > 0 && pos >= max - 4) { track.scrollTo({ left: 0, behavior: "smooth" }); return; }
    if (dir < 0 && pos <= 4) { track.scrollTo({ left: s * max, behavior: "smooth" }); return; }
    track.scrollBy({ left: s * dir * step(), behavior: "smooth" });
  }
  function setIcon() {
    playBtn.innerHTML = ico(userPaused ? PLAY : PAUSE);
    playBtn.setAttribute("aria-label", userPaused ? L[3] : L[2]);
    playBtn.setAttribute("aria-pressed", String(userPaused));
  }
  function tick() { if (!userPaused && !hover && !document.hidden) go(1); }
  function start() { clearInterval(timer); timer = setInterval(tick, 3500); }
  bar.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b === playBtn) { userPaused = !userPaused; setIcon(); }
    else { go(+b.getAttribute("data-dir")); start(); }
  });
  ["mouseenter", "focusin", "touchstart"].forEach(function (ev) { track.addEventListener(ev, function () { hover = true; }, { passive: true }); });
  ["mouseleave", "focusout", "touchend"].forEach(function (ev) { track.addEventListener(ev, function () { setTimeout(function () { hover = false; }, ev === "touchend" ? 4000 : 0); }, { passive: true }); });
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { go(rtl ? -1 : 1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { go(rtl ? 1 : -1); e.preventDefault(); }
  });
  setIcon(); start();
})();
