/* Avís «Obert ara / Tancat ara» segons l'horari real de Logos (hora de Madrid).
   Dilluns, dimarts i dijous: 8–14 i 16–20. Dimecres: 9–13:30 sense cita. Divendres: 8–14. */
(function () {
  var els = document.querySelectorAll('[data-horario]');
  if (!els.length) return;
  var H = {
    1: { t: [['08:00', '14:00'], ['16:00', '20:00']] },
    2: { t: [['08:00', '14:00'], ['16:00', '20:00']] },
    3: { t: [['09:00', '13:30']], libre: ['09:00', '13:30'] },
    4: { t: [['08:00', '14:00'], ['16:00', '20:00']] },
    5: { t: [['08:00', '14:00']] }
  };
  var L = {
    ca: { hoy: 'avui', on: 'Obert ara', off: 'Tancat ara', libre: 'sense cita prèvia', cita: 'amb cita prèvia', fins: 'fins a les', obrim: 'obrim', avui: 'avui', dema: 'demà', el: 'el ', a: 'a les', dies: ['dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres'] },
    es: { hoy: 'hoy', on: 'Abierto ahora', off: 'Cerrado ahora', libre: 'sin cita previa', cita: 'con cita previa', fins: 'hasta las', obrim: 'abrimos', avui: 'hoy', dema: 'mañana', el: 'el ', a: 'a las', dies: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'] },
    en: { hoy: 'today', on: 'Open now', off: 'Closed now', libre: 'no appointment needed', cita: 'by appointment', fins: 'until', obrim: 'we open', avui: 'today', dema: 'tomorrow', el: 'on ', a: 'at', dies: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    fr: { hoy: "aujourd'hui", on: 'Ouvert maintenant', off: 'Fermé maintenant', libre: 'sans rendez-vous', cita: 'sur rendez-vous', fins: "jusqu'à", obrim: 'nous ouvrons', avui: "aujourd'hui", dema: 'demain', el: 'le ', a: 'à', dies: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'] },
    ar: { hoy: 'اليوم', on: 'مفتوح الآن', off: 'مغلق الآن', libre: 'بدون موعد مسبق', cita: 'بموعد مسبق', fins: 'حتى الساعة', obrim: 'نفتح', avui: 'اليوم', dema: 'غدًا', el: '', a: 'الساعة', dies: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'] }
  };
  var lang = (document.documentElement.lang || 'ca').slice(0, 2);
  var T = L[lang] || L.ca;
  var mn = function (s) { return +s.slice(0, 2) * 60 + +s.slice(3, 5); };
  function ahora() {
    try {
      var p = {};
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false })
        .formatToParts(new Date()).forEach(function (x) { p[x.type] = x.value; });
      var d = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
      return { dia: d[p.weekday] || 1, min: (+p.hour % 24) * 60 + +p.minute };
    } catch (e) { var n = new Date(); return { dia: n.getDay() || 7, min: n.getHours() * 60 + n.getMinutes() }; }
  }
  function pinta() {
    var n = ahora(), h = H[n.dia], txt, on = false, i, j, t;
    if (h) for (i = 0; i < h.t.length; i++) {
      t = h.t[i];
      if (n.min >= mn(t[0]) && n.min < mn(t[1])) {
        var libre = h.libre && n.min >= mn(h.libre[0]) && n.min < mn(h.libre[1]);
        txt = '🟢 ' + T.on + ' · ' + (libre ? T.libre : T.cita) + ' · ' + T.fins + ' ' + t[1] + ' · ' + T.hoy + ': ' + h.t.map(function (x) { return x[0].replace(/^0/, '') + '–' + x[1]; }).join(' · '); on = true; break;
      }
    }
    if (!on) {
      var cuando = '';
      for (i = 0; i < 8 && !cuando; i++) {
        var dia = ((n.dia - 1 + i) % 7) + 1, hh = H[dia];
        if (!hh) continue;
        for (j = 0; j < hh.t.length; j++) {
          if (i === 0 && mn(hh.t[j][0]) <= n.min) continue;
          cuando = (i === 0 ? T.avui : i === 1 ? T.dema : T.el + T.dies[dia - 1]) + ' ' + T.a + ' ' + hh.t[j][0];
          break;
        }
      }
      txt = '🔴 ' + T.off + (cuando ? ' · ' + T.obrim + ' ' + cuando : '');
    }
    for (var k = 0; k < els.length; k++) {
      els[k].textContent = txt;
      els[k].className = 'horario-aviso ' + (on ? 'horario-aviso--on' : 'horario-aviso--off');
      els[k].hidden = false;
    }
  }
  pinta();
  setInterval(pinta, 60000);
})();
