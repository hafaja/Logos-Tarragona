/* Associació Logos – web · Botó «Aa» (veure i llegir millor) i assistent virtual
   - «Aa»: lletra més gran, escoltar la pàgina, més contrast, text més separat i sense moviment.
     Queda desat en aquest navegador (localStorage) i serveix per a tot el web.
   - Assistent: el mateix «tècnic virtual» de Logos Acompanya (funció asistente-tecnico de Supabase).
   5 idiomes: ca, es, en, fr, ar (segons <html lang>). */
(function () {
  "use strict";
  if (window.__logosAjuda) return; window.__logosAjuda = true;
  var LANG = (document.documentElement.lang || "ca").slice(0, 2);
  var RTL = document.documentElement.dir === "rtl";
  var SB_URL = "https://foxtlpyfedwsvttzorql.supabase.co";
  var SB_KEY = "sb_publishable_Ght82ml0pvg0_nQvunlXVA_u0WjRscq";
  var APP = "https://acompanya.logostgn.cat";
  var TEL = "+34630461560", TEL_TXT = "630 46 15 60", MAX_MSG = 20;

  var T = {
    ca: { aa: "Ajudes per veure i llegir millor", tit: "Veure i llegir millor", sub: "Toca el que t'ajudi. Queda desat en aquest navegador.", gran: "Lletra més gran", normal: "Lletra normal", g1: "Lletra gran", g2: "Lletra molt gran",
      llegir: "Escoltar aquesta pàgina", llegirD: "Et llegeix en veu alta el que hi ha a la pàgina", contr: "Més contrast", contrD: "Colors més forts i lletra més fosca", esp: "Text més separat", espD: "Més espai entre lletres i línies",
      quiet: "Sense moviment", quietD: "Atura les animacions i el carrusel", treure: "Treure-ho tot", fet: "Fet", si: "Sí", no: "No", llegint: "Llegint…", aturar: "Aturar", noVeu: "Aquest navegador no pot llegir en veu alta.",
      asis: "Assistent de Logos", asisObrir: "Obrir l'assistent de Logos", asisSub: "Assistent virtual · respon a l'instant", hola: "Hola! Sóc l'assistent virtual de Logos. Explica'm què necessites i t'orientaré: tràmits, feina, formació, ajudes… Pots escriure en el teu idioma.",
      priv: "És una intel·ligència artificial. No hi escriguis DNI/NIE, dades de salut ni comptes bancaris.", privLink: "Privacitat", ph: "Escriu la teva pregunta…", enviar: "Enviar", tancar: "Tancar",
      sug: ["Què fa Logos?", "Necessito ajuda amb un tràmit", "Vull trobar feina", "On sou i quin horari teniu?"], err: "Ara mateix no puc respondre. Torna-ho a provar o truca al " + TEL_TXT + ".",
      limit: "Hem parlat molt! Per continuar, truca'ns al " + TEL_TXT + " o entra a Logos Acompanya.", cita: "Demanar cita a Logos Acompanya", trucar: "Trucar", wa: "WhatsApp", app: "Obrir Logos Acompanya" },
    es: { aa: "Ayudas para ver y leer mejor", tit: "Ver y leer mejor", sub: "Toca lo que te ayude. Se queda guardado en este navegador.", gran: "Letra más grande", normal: "Letra normal", g1: "Letra grande", g2: "Letra muy grande",
      llegir: "Escuchar esta página", llegirD: "Te lee en voz alta lo que hay en la página", contr: "Más contraste", contrD: "Colores más fuertes y letra más oscura", esp: "Texto más separado", espD: "Más espacio entre letras y líneas",
      quiet: "Sin movimiento", quietD: "Para las animaciones y el carrusel", treure: "Quitar todo", fet: "Listo", si: "Sí", no: "No", llegint: "Leyendo…", aturar: "Parar", noVeu: "Este navegador no puede leer en voz alta.",
      asis: "Asistente de Logos", asisObrir: "Abrir el asistente de Logos", asisSub: "Asistente virtual · responde al instante", hola: "¡Hola! Soy el asistente virtual de Logos. Cuéntame qué necesitas y te oriento: trámites, empleo, formación, ayudas… Puedes escribir en tu idioma.",
      priv: "Es una inteligencia artificial. No escribas DNI/NIE, datos de salud ni cuentas bancarias.", privLink: "Privacidad", ph: "Escribe tu pregunta…", enviar: "Enviar", tancar: "Cerrar",
      sug: ["¿Qué hace Logos?", "Necesito ayuda con un trámite", "Quiero encontrar trabajo", "¿Dónde estáis y qué horario tenéis?"], err: "Ahora mismo no puedo responder. Inténtalo de nuevo o llama al " + TEL_TXT + ".",
      limit: "¡Hemos hablado mucho! Para seguir, llámanos al " + TEL_TXT + " o entra en Logos Acompanya.", cita: "Pedir cita en Logos Acompanya", trucar: "Llamar", wa: "WhatsApp", app: "Abrir Logos Acompanya" },
    en: { aa: "Help to see and read better", tit: "See and read better", sub: "Tap what helps you. It is saved in this browser.", gran: "Bigger text", normal: "Normal text", g1: "Big text", g2: "Very big text",
      llegir: "Listen to this page", llegirD: "Reads the page aloud for you", contr: "More contrast", contrD: "Stronger colours and darker text", esp: "More spacing", espD: "More space between letters and lines",
      quiet: "No motion", quietD: "Stops animations and the carousel", treure: "Reset all", fet: "Done", si: "On", no: "Off", llegint: "Reading…", aturar: "Stop", noVeu: "This browser cannot read aloud.",
      asis: "Logos assistant", asisObrir: "Open the Logos assistant", asisSub: "Virtual assistant · instant replies", hola: "Hi! I'm the Logos virtual assistant. Tell me what you need and I'll guide you: paperwork, jobs, training, benefits… You can write in your own language.",
      priv: "This is artificial intelligence. Do not write ID numbers, health data or bank details.", privLink: "Privacy", ph: "Type your question…", enviar: "Send", tancar: "Close",
      sug: ["What does Logos do?", "I need help with paperwork", "I want to find a job", "Where are you and when are you open?"], err: "I can't answer right now. Try again or call " + TEL_TXT + ".",
      limit: "We've talked a lot! To continue, call us on " + TEL_TXT + " or open Logos Acompanya.", cita: "Book an appointment in Logos Acompanya", trucar: "Call", wa: "WhatsApp", app: "Open Logos Acompanya" },
    fr: { aa: "Aides pour mieux voir et lire", tit: "Mieux voir et lire", sub: "Touchez ce qui vous aide. C'est enregistré dans ce navigateur.", gran: "Texte plus grand", normal: "Texte normal", g1: "Grand texte", g2: "Très grand texte",
      llegir: "Écouter cette page", llegirD: "Lit la page à voix haute", contr: "Plus de contraste", contrD: "Couleurs plus fortes et texte plus foncé", esp: "Texte plus espacé", espD: "Plus d'espace entre lettres et lignes",
      quiet: "Sans mouvement", quietD: "Arrête les animations et le carrousel", treure: "Tout enlever", fet: "OK", si: "Oui", no: "Non", llegint: "Lecture…", aturar: "Arrêter", noVeu: "Ce navigateur ne peut pas lire à voix haute.",
      asis: "Assistant de Logos", asisObrir: "Ouvrir l'assistant de Logos", asisSub: "Assistant virtuel · répond tout de suite", hola: "Bonjour ! Je suis l'assistant virtuel de Logos. Dites-moi ce dont vous avez besoin et je vous oriente : démarches, emploi, formation, aides… Vous pouvez écrire dans votre langue.",
      priv: "C'est une intelligence artificielle. N'écrivez pas de numéro d'identité, de données de santé ni de compte bancaire.", privLink: "Confidentialité", ph: "Écrivez votre question…", enviar: "Envoyer", tancar: "Fermer",
      sug: ["Que fait Logos ?", "J'ai besoin d'aide pour une démarche", "Je veux trouver un emploi", "Où êtes-vous et quels sont vos horaires ?"], err: "Je ne peux pas répondre pour le moment. Réessayez ou appelez le " + TEL_TXT + ".",
      limit: "Nous avons beaucoup parlé ! Pour continuer, appelez le " + TEL_TXT + " ou ouvrez Logos Acompanya.", cita: "Prendre rendez-vous dans Logos Acompanya", trucar: "Appeler", wa: "WhatsApp", app: "Ouvrir Logos Acompanya" },
    ar: { aa: "مساعدات لرؤية وقراءة أفضل", tit: "رؤية وقراءة أفضل", sub: "اختر ما يساعدك. يُحفَظ في هذا المتصفح.", gran: "خط أكبر", normal: "خط عادي", g1: "خط كبير", g2: "خط كبير جدًا",
      llegir: "استمع إلى هذه الصفحة", llegirD: "يقرأ لك الصفحة بصوت عالٍ", contr: "تباين أكثر", contrD: "ألوان أقوى ونص أغمق", esp: "نص متباعد", espD: "مسافة أكبر بين الحروف والأسطر",
      quiet: "بدون حركة", quietD: "يوقف الحركات والعرض المتحرك", treure: "إزالة الكل", fet: "تم", si: "نعم", no: "لا", llegint: "جارٍ القراءة…", aturar: "إيقاف", noVeu: "هذا المتصفح لا يستطيع القراءة بصوت عالٍ.",
      asis: "مساعد لوغوس", asisObrir: "افتح مساعد لوغوس", asisSub: "مساعد افتراضي · يجيب فورًا", hola: "مرحبًا! أنا المساعد الافتراضي لجمعية لوغوس. أخبرني بما تحتاجه وسأرشدك: الإجراءات الإدارية، العمل، التكوين، المساعدات… يمكنك الكتابة بلغتك.",
      priv: "هذا ذكاء اصطناعي. لا تكتب رقم الهوية أو بيانات صحية أو حسابات بنكية.", privLink: "الخصوصية", ph: "اكتب سؤالك…", enviar: "إرسال", tancar: "إغلاق",
      sug: ["ماذا تفعل لوغوس؟", "أحتاج مساعدة في إجراء إداري", "أريد أن أجد عملًا", "أين أنتم وما هي أوقات العمل؟"], err: "لا أستطيع الإجابة الآن. حاول مرة أخرى أو اتصل بالرقم " + TEL_TXT + ".",
      limit: "تحدثنا كثيرًا! للمتابعة اتصل بنا على " + TEL_TXT + " أو افتح Logos Acompanya.", cita: "اطلب موعدًا في Logos Acompanya", trucar: "اتصال", wa: "واتساب", app: "افتح Logos Acompanya" }
  };
  var t = T[LANG] || T.ca;
  var VOZ = { ca: "ca-ES", es: "es-ES", en: "en-GB", fr: "fr-FR", ar: "ar-SA" }[LANG] || "ca-ES";
  var PRIV = (LANG === "ca" ? "" : LANG + "-") + "privacitat.html";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ---------- estils ---------- */
  var css = "" +
    ".lg-fab{position:fixed;bottom:20px;z-index:85;width:58px;height:58px;border-radius:50%;border:3px solid #fff;cursor:pointer;box-shadow:0 10px 26px rgba(20,20,20,.28);display:grid;place-items:center;font:800 21px/1 system-ui,sans-serif;color:#fff;transition:transform .15s}" +
    ".lg-fab:hover{transform:scale(1.06)}.lg-fab:focus-visible{outline:4px solid #F2BC2C;outline-offset:3px}" +
    "#lg-aa{left:20px;background:#163F7A}#lg-xat{right:20px;background:#C2410C;font-size:25px}" +
    "#lg-aa.on{box-shadow:0 0 0 4px #F2BC2C,0 10px 26px rgba(20,20,20,.28)}" +
    "[dir=rtl] #lg-aa{left:auto;right:20px}[dir=rtl] #lg-xat{right:auto;left:20px}" +
    ".lg-ov{position:fixed;inset:0;z-index:96;background:rgba(15,25,45,.5);display:flex;align-items:center;justify-content:center;padding:14px}" +
    ".lg-caja{background:#fff;color:#141414;border-radius:22px;max-width:450px;width:100%;padding:20px 18px 16px;box-shadow:0 24px 60px rgba(0,0,0,.3);max-height:92vh;overflow:auto;font-family:inherit}" +
    ".lg-caja h2{margin:0 0 4px;font-size:22px;color:#163F7A}.lg-sub{margin:0 0 14px;color:#4A5160;font-size:15px}" +
    ".lg-op{display:flex;align-items:center;gap:14px;width:100%;text-align:start;background:#F3F7FC;border:2px solid #D5E1F0;border-radius:16px;padding:13px;margin:0 0 10px;cursor:pointer;font:inherit;color:inherit}" +
    ".lg-op:focus-visible,.lg-tam button:focus-visible,.lg-pie button:focus-visible,.lg-xat button:focus-visible,.lg-xat a:focus-visible{outline:3px solid #F2BC2C;outline-offset:2px}" +
    ".lg-op .ic{font-size:28px;width:42px;text-align:center;flex:0 0 42px}.lg-op strong{display:block;font-size:17px}.lg-op small{display:block;color:#4A5160;font-size:13.5px;margin-top:2px}" +
    ".lg-op .est{margin-inline-start:auto;font-weight:800;font-size:13px;padding:4px 10px;border-radius:999px;background:#E3E8EF;color:#2F3746;white-space:nowrap}" +
    ".lg-op[aria-pressed=true]{border-color:#1F66C1;background:#E8F1FC}.lg-op[aria-pressed=true] .est{background:#1F66C1;color:#fff}" +
    ".lg-tam{display:flex;gap:8px;margin-inline-start:auto}.lg-tam button{min-width:48px;height:46px;border-radius:12px;border:2px solid #D5E1F0;background:#fff;font:800 16px system-ui,sans-serif;cursor:pointer;color:#163F7A}" +
    ".lg-tam button[aria-pressed=true]{background:#1F66C1;border-color:#1F66C1;color:#fff}" +
    ".lg-pie{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:6px}.lg-pie .ok{background:#163F7A;color:#fff;border:0;border-radius:999px;padding:12px 24px;font-family:inherit;font-weight:800;font-size:16px;cursor:pointer}" +
    ".lg-pie .reset{background:none;border:0;color:#1F66C1;text-decoration:underline;cursor:pointer;font:inherit;font-size:14.5px}" +
    ".lg-llegint{position:fixed;left:50%;transform:translateX(-50%);bottom:92px;z-index:97;background:#163F7A;color:#fff;border-radius:999px;padding:10px 12px 10px 18px;display:flex;gap:12px;align-items:center;box-shadow:0 10px 26px rgba(0,0,0,.3);font-weight:700}" +
    ".lg-llegint button{background:#fff;color:#163F7A;border:0;border-radius:999px;padding:8px 14px;font-weight:800;cursor:pointer}" +
    "html.lg-t1 :is(.header,main,.footer){zoom:1.15}html.lg-t2 :is(.header,main,.footer){zoom:1.3}" +
    "html.lg-contrast :is(main,.footer){filter:contrast(1.2)}html.lg-contrast :is(main,.footer) :is(p,li,small,span,label){color:#111 !important}html.lg-contrast main a{text-decoration:underline !important}" +
    "html.lg-espai :is(main,.footer){letter-spacing:.04em;word-spacing:.14em}html.lg-espai :is(main,.footer) :is(p,li,label,small){line-height:1.85 !important}" +
    "html.lg-quiet *,html.lg-quiet *::before,html.lg-quiet *::after{animation:none !important;transition:none !important;scroll-behavior:auto !important}" +
    ".lg-xat{position:fixed;bottom:92px;right:20px;z-index:96;width:min(400px,calc(100vw - 24px));height:min(620px,calc(100vh - 120px));background:#fff;color:#141414;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,.32);display:none;flex-direction:column;overflow:hidden;font-family:inherit}" +
    "[dir=rtl] .lg-xat{right:auto;left:20px}.lg-xat.on{display:flex}" +
    ".lg-xat-cap{display:flex;align-items:center;gap:10px;padding:14px 14px 12px;background:#163F7A;color:#fff}.lg-xat-cap strong{display:block;font-size:17px}.lg-xat-cap small{opacity:.9;font-size:12.5px}" +
    ".lg-xat-cap button{margin-inline-start:auto;background:rgba(255,255,255,.16);border:0;color:#fff;width:36px;height:36px;border-radius:10px;font-size:17px;cursor:pointer}" +
    ".lg-xat-priv{margin:0;padding:8px 14px;background:#FFF7E0;color:#5A4300;font-size:12.5px;border-bottom:1px solid #F2E2B0}.lg-xat-priv a{color:#5A4300;font-weight:700}" +
    ".lg-msgs{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#F6F8FB}" +
    ".lg-m{max-width:86%;padding:10px 13px;border-radius:16px;font-size:15px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}" +
    ".lg-m.bot{background:#fff;border:1px solid #E2E7EF;align-self:flex-start;border-end-start-radius:4px}.lg-m.yo{background:#1F66C1;color:#fff;align-self:flex-end;border-end-end-radius:4px}" +
    ".lg-sug,.lg-acc{display:flex;flex-wrap:wrap;gap:6px}.lg-sug button,.lg-acc a,.lg-acc button{background:#fff;border:1.5px solid #1F66C1;color:#163F7A;border-radius:999px;padding:7px 12px;font-family:inherit;font-weight:700;font-size:13.5px;cursor:pointer;text-decoration:none}" +
    ".lg-sug button:hover,.lg-acc a:hover{background:#E8F1FC}" +
    ".lg-esc i{display:inline-block;width:7px;height:7px;margin:0 2px;border-radius:50%;background:#8A97AB;animation:lgp 1s infinite}.lg-esc i:nth-child(2){animation-delay:.15s}.lg-esc i:nth-child(3){animation-delay:.3s}" +
    "@keyframes lgp{0%,80%,100%{opacity:.3}40%{opacity:1}}" +
    ".lg-xat form{display:flex;gap:8px;padding:10px;border-top:1px solid #E2E7EF;background:#fff}.lg-xat input{flex:1;min-width:0;border:2px solid #D5E1F0;border-radius:999px;padding:11px 14px;font:inherit;font-size:15px}" +
    ".lg-xat input:focus{outline:none;border-color:#1F66C1}.lg-xat form button{background:#C2410C;color:#fff;border:0;border-radius:999px;padding:0 16px;font-family:inherit;font-weight:800;font-size:15px;cursor:pointer}" +
    ".lg-xat-peu{display:flex;gap:6px;flex-wrap:wrap;padding:0 10px 10px;background:#fff}.lg-xat-peu a{font-size:12.5px;color:#163F7A;font-weight:700;text-decoration:none;border:1px solid #D5E1F0;border-radius:999px;padding:5px 10px}" +
    "@media (max-width:700px){.lg-fab{width:52px;height:52px;bottom:14px;font-size:19px}#lg-aa{left:14px}#lg-xat{right:14px;font-size:23px}[dir=rtl] #lg-aa{right:14px}[dir=rtl] #lg-xat{left:14px}" +
    ".lg-xat{right:8px;left:8px;width:auto;bottom:76px;height:calc(100vh - 96px)}.lg-ov{align-items:flex-end}}" +
    "@media (prefers-reduced-motion:reduce){.lg-fab{transition:none}.lg-esc i{animation:none}}" +
    "@media print{.lg-fab,.lg-xat,.lg-llegint{display:none !important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- «Aa» ---------- */
  var CLAU = "logos_web_ajudes";
  function llegir() { try { return JSON.parse(localStorage.getItem(CLAU) || "{}") || {}; } catch (e) { return {}; } }
  function desar(o) { try { localStorage.setItem(CLAU, JSON.stringify(o)); } catch (e) {} }
  function aplicar() {
    var o = llegir(), h = document.documentElement;
    h.classList.toggle("lg-t1", o.tam === 1); h.classList.toggle("lg-t2", o.tam === 2);
    h.classList.toggle("lg-contrast", !!o.contrast); h.classList.toggle("lg-espai", !!o.espai); h.classList.toggle("lg-quiet", !!o.quiet);
    var b = document.getElementById("lg-aa"); if (b) b.classList.toggle("on", !!(o.tam || o.contrast || o.espai || o.quiet));
    if (o.quiet) window.dispatchEvent(new Event("logos-quiet"));
  }
  window.logosQuiet = function () { return document.documentElement.classList.contains("lg-quiet") || !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); };
  var focusTornar = null;
  function obrirAa() {
    tancarAa(true); focusTornar = document.activeElement;
    var o = llegir();
    var op = function (k, ic, tit, d) { return '<button type="button" class="lg-op" aria-pressed="' + !!o[k] + '" data-k="' + k + '"><span class="ic" aria-hidden="true">' + ic + "</span><span><strong>" + tit + "</strong><small>" + d + '</small></span><span class="est">' + (o[k] ? t.si : t.no) + "</span></button>"; };
    var tb = function (n, txt, et) { return '<button type="button" aria-pressed="' + ((o.tam || 0) === n) + '" aria-label="' + et + '" data-tam="' + n + '">' + txt + "</button>"; };
    var ov = document.createElement("div"); ov.className = "lg-ov"; ov.id = "lg-aa-ov";
    ov.innerHTML = '<div class="lg-caja" role="dialog" aria-modal="true" aria-labelledby="lg-aa-t"><h2 id="lg-aa-t">Aa · ' + t.tit + '</h2><p class="lg-sub">' + t.sub + "</p>" +
      '<div class="lg-op" style="cursor:default"><span class="ic" aria-hidden="true">🔠</span><span><strong>' + t.gran + '</strong></span><span class="lg-tam">' + tb(0, "A", t.normal) + tb(1, "A+", t.g1) + tb(2, "A++", t.g2) + "</span></div>" +
      '<button type="button" class="lg-op" data-k="llegir"><span class="ic" aria-hidden="true">🔊</span><span><strong>' + t.llegir + "</strong><small>" + t.llegirD + "</small></span></button>" +
      op("contrast", "🌓", t.contr, t.contrD) + op("espai", "↔️", t.esp, t.espD) + op("quiet", "⏸️", t.quiet, t.quietD) +
      '<div class="lg-pie"><button type="button" class="reset">' + t.treure + '</button><button type="button" class="ok">✓ ' + t.fet + "</button></div></div>";
    document.body.appendChild(ov);
    ov.addEventListener("click", function (e) {
      if (e.target === ov) return tancarAa();
      var b = e.target.closest("button"); if (!b) return;
      var x = llegir();
      if (b.dataset.tam != null) { x.tam = +b.dataset.tam; desar(x); aplicar(); return obrirAaMantenint('[data-tam="' + b.dataset.tam + '"]'); }
      if (b.dataset.k === "llegir") return llegirPagina();
      if (b.dataset.k) { x[b.dataset.k] = !x[b.dataset.k]; desar(x); aplicar(); return obrirAaMantenint('[data-k="' + b.dataset.k + '"]'); }
      if (b.classList.contains("reset")) { desar({}); aplicar(); return obrirAaMantenint(".reset"); }
      if (b.classList.contains("ok")) return tancarAa();
    });
    ov.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); tancarAa(); }
      if (e.key === "Tab") { var f = ov.querySelectorAll("button"), p = f[0], u = f[f.length - 1]; if (e.shiftKey && document.activeElement === p) { e.preventDefault(); u.focus(); } else if (!e.shiftKey && document.activeElement === u) { e.preventDefault(); p.focus(); } }
    });
    setTimeout(function () { var f = ov.querySelector(".lg-tam button[aria-pressed=true]") || ov.querySelector("button"); if (f) f.focus(); }, 30);
  }
  function obrirAaMantenint(sel) { var tornar = focusTornar; obrirAa(); focusTornar = tornar; var b = document.querySelector("#lg-aa-ov " + sel); if (b) setTimeout(function () { b.focus(); }, 35); }
  function tancarAa(silenci) { var ov = document.getElementById("lg-aa-ov"); if (ov) ov.remove(); if (!silenci && focusTornar && focusTornar.focus) focusTornar.focus(); }
  function llegirPagina() {
    if (!("speechSynthesis" in window)) { alert(t.noVeu); return; }
    tancarAa();
    var zona = document.getElementById("contingut") || document.querySelector("main") || document.body;
    var txt = (zona.innerText || "").replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}️]/gu, " ").replace(/\s*\n+\s*/g, ". ").replace(/(\.\s*){2,}/g, ". ").trim();
    if (!txt) return;
    speechSynthesis.cancel();
    var trossos = txt.match(/[^.!?؟]{1,220}[.!?؟]?/g) || [txt];
    var veus = speechSynthesis.getVoices(), veu = veus.filter(function (v) { return v.lang === VOZ; })[0] || veus.filter(function (v) { return v.lang && v.lang.indexOf(VOZ.slice(0, 2)) === 0; })[0];
    trossos.forEach(function (x, i) { var u = new SpeechSynthesisUtterance(x); u.lang = VOZ; if (veu) u.voice = veu; u.rate = 0.92; if (i === trossos.length - 1) u.onend = pararLectura; speechSynthesis.speak(u); });
    var l = document.getElementById("lg-llegint"); if (l) l.remove();
    l = document.createElement("div"); l.className = "lg-llegint"; l.id = "lg-llegint"; l.setAttribute("role", "status");
    l.innerHTML = "<span>🔊 " + t.llegint + '</span><button type="button">■ ' + t.aturar + "</button>";
    l.querySelector("button").onclick = pararLectura; document.body.appendChild(l);
  }
  function pararLectura() { try { speechSynthesis.cancel(); } catch (e) {} var l = document.getElementById("lg-llegint"); if (l) l.remove(); }

  /* ---------- assistent ---------- */
  var historial = [], panell = null, enCurs = false;
  function nMissatges() { try { return +sessionStorage.getItem("logos_web_xat_n") || 0; } catch (e) { return 0; } }
  function sumar() { try { sessionStorage.setItem("logos_web_xat_n", String(nMissatges() + 1)); } catch (e) {} }
  function crearXat() {
    panell = document.createElement("section"); panell.className = "lg-xat"; panell.id = "lg-xat-panell";
    panell.setAttribute("role", "dialog"); panell.setAttribute("aria-label", t.asis);
    panell.innerHTML = '<div class="lg-xat-cap"><span aria-hidden="true" style="font-size:26px">💬</span><div><strong>' + t.asis + "</strong><small>" + t.asisSub + '</small></div><button type="button" class="lg-x" aria-label="' + t.tancar + '">✕</button></div>' +
      '<p class="lg-xat-priv">🔒 ' + t.priv + ' <a href="' + PRIV + '">' + t.privLink + "</a></p>" +
      '<div class="lg-msgs" aria-live="polite"></div>' +
      '<form autocomplete="off"><label for="lg-xat-in" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">' + t.ph + '</label><input id="lg-xat-in" maxlength="600" placeholder="' + t.ph + '"><button type="submit">' + t.enviar + "</button></form>" +
      '<div class="lg-xat-peu"><a href="' + APP + '" target="_blank" rel="noopener">📅 ' + t.cita + '</a><a href="tel:' + TEL + '">📞 ' + TEL_TXT + '</a><a href="https://wa.me/34630461560" target="_blank" rel="noopener">💬 ' + t.wa + "</a></div>";
    document.body.appendChild(panell);
    panell.querySelector(".lg-x").onclick = tancarXat;
    panell.addEventListener("keydown", function (e) { if (e.key === "Escape") { e.preventDefault(); tancarXat(); } });
    panell.querySelector("form").onsubmit = function (e) { e.preventDefault(); var i = panell.querySelector("input"); var v = i.value.trim(); if (v) { i.value = ""; enviar(v); } };
    afegir(t.hola, "bot");
    var s = document.createElement("div"); s.className = "lg-sug";
    t.sug.forEach(function (x) { var b = document.createElement("button"); b.type = "button"; b.textContent = x; b.onclick = function () { enviar(x); }; s.appendChild(b); });
    panell.querySelector(".lg-msgs").appendChild(s);
  }
  function obrirXat() {
    if (!panell) crearXat();
    panell.classList.add("on"); document.getElementById("lg-xat").setAttribute("aria-expanded", "true");
    setTimeout(function () { panell.querySelector("input").focus(); }, 30);
  }
  function tancarXat() { if (!panell) return; panell.classList.remove("on"); var b = document.getElementById("lg-xat"); b.setAttribute("aria-expanded", "false"); b.focus(); }
  function afegir(text, qui) {
    var m = document.createElement("div"); m.className = "lg-m " + qui; m.textContent = text;
    var c = panell.querySelector(".lg-msgs"); c.appendChild(m); c.scrollTop = c.scrollHeight; return m;
  }
  function horari() { return "Lunes, martes y jueves de 8 a 14 y de 16 a 20 h (con cita previa); miércoles de 9 a 13:30 h sin cita; viernes de 8 a 14 h."; }
  function cridar(nom, cos) {
    var ctrl = window.AbortController ? new AbortController() : null; var tm = setTimeout(function () { if (ctrl) ctrl.abort(); }, 60000);
    return fetch(SB_URL + "/functions/v1/" + nom, { method: "POST", signal: ctrl ? ctrl.signal : undefined, headers: { "Content-Type": "application/json", apikey: SB_KEY, Authorization: "Bearer " + SB_KEY }, body: JSON.stringify(cos) })
      .then(function (r) { clearTimeout(tm); if (!r.ok) throw new Error("http " + r.status); return r.json(); });
  }
  function enviar(text) {
    if (enCurs) return;
    var sug = panell.querySelector(".lg-sug"); if (sug) sug.remove();
    afegir(text, "yo");
    if (nMissatges() >= MAX_MSG) { afegir(t.limit, "bot"); return; }
    sumar(); enCurs = true;
    var previ = historial.slice(); historial.push({ role: "user", content: text });
    var p = afegir("", "bot"); p.innerHTML = '<span class="lg-esc" aria-label="…"><i></i><i></i><i></i></span>';
    var ctx = { lang: LANG, horario: horari(), pantalla: "web " + location.pathname, logueado: false, areas: [] };
    cridar("asistente-tecnico", { mensaje: text, historial: previ, contexto: ctx })
      .then(function (d) { if (!d || !d.respuesta) throw new Error("buit"); return d; })
      .catch(function () { return cridar("asistente", { mensaje: text, historial: previ, ambito: "ciudadania" }); })
      .then(function (d) {
        var r = (d && d.respuesta) || t.err; p.textContent = r; historial.push({ role: "assistant", content: r });
        var acc = (d && Array.isArray(d.acciones) ? d.acciones : []).map(function (a) {
          if (a.tipo === "llamar") return '<a href="tel:' + TEL + '">📞 ' + esc(a.etiqueta || t.trucar) + "</a>";
          if (a.tipo === "whatsapp") return '<a href="https://wa.me/34630461560" target="_blank" rel="noopener">💬 ' + esc(a.etiqueta || t.wa) + "</a>";
          return '<a href="' + APP + '" target="_blank" rel="noopener">➡️ ' + esc(a.etiqueta || t.app) + "</a>";
        });
        if (acc.length) { var c = document.createElement("div"); c.className = "lg-acc"; c.innerHTML = acc.join(""); var ms = panell.querySelector(".lg-msgs"); ms.appendChild(c); ms.scrollTop = ms.scrollHeight; }
      })
      .catch(function () { p.textContent = t.err; })
      .then(function () { enCurs = false; });
  }

  /* ---------- botons ---------- */
  function botons() {
    if (document.getElementById("lg-aa")) return;
    var a = document.createElement("button"); a.type = "button"; a.id = "lg-aa"; a.className = "lg-fab"; a.setAttribute("aria-haspopup", "dialog"); a.setAttribute("aria-label", t.aa); a.title = t.aa;
    a.innerHTML = '<span aria-hidden="true">Aa</span>'; a.onclick = obrirAa;
    var x = document.createElement("button"); x.type = "button"; x.id = "lg-xat"; x.className = "lg-fab"; x.setAttribute("aria-label", t.asisObrir); x.setAttribute("aria-expanded", "false"); x.setAttribute("aria-controls", "lg-xat-panell"); x.title = t.asis;
    x.innerHTML = '<span aria-hidden="true">💬</span>'; x.onclick = function () { if (panell && panell.classList.contains("on")) tancarXat(); else obrirXat(); };
    document.body.appendChild(a); document.body.appendChild(x);
    aplicar();
  }
  aplicar();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", botons); else botons();
})();
