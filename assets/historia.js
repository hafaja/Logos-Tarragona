/* Contador «Persones ateses» connectat a Logos Intranet (Administració → Nostra història).
   Només rep any i nombre de persones (xifres agregades); mai dades personals.
   Si no es pot carregar, la targeta queda amagada i la resta de la pàgina no es veu afectada. */
(function () {
  var U = 'https://foxtlpyfedwsvttzorql.supabase.co';
  var K = 'sb_publishable_Ght82ml0pvg0_nQvunlXVA_u0WjRscq';
  var card = document.querySelector('[data-historia]');
  if (!card) return;
  var fmt = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };

  fetch(U + '/rest/v1/rpc/historia_publica', {
    method: 'POST',
    headers: { apikey: K, Authorization: 'Bearer ' + K, 'Content-Type': 'application/json' },
    body: '{}'
  }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (d) {
    if (!d || !d.total || !d.por_anio || !d.por_anio.length) return;
    var total = Number(d.total);
    var num = card.querySelector('[data-historia-total]');
    var sub = card.querySelector('[data-historia-sub]');
    var btn = card.querySelector('[data-historia-toggle]');
    var llista = card.querySelector('[data-historia-anys]');
    sub.textContent = (card.getAttribute('data-sub') || '').replace('{desde}', d.desde);
    num.textContent = fmt(total);
    card.parentNode.classList.add('has-historia');
    card.hidden = false;

    // Xifres per any (desplegable)
    llista.innerHTML = d.por_anio.map(function (x) { return '<li><span>' + x.anio + '</span><strong>' + fmt(x.personas) + '</strong></li>'; }).join('');
    var obre = card.getAttribute('data-anys') || '', tanca = card.getAttribute('data-anys-tanca') || '';
    if (obre) {
      btn.textContent = obre; btn.hidden = false; btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', function () {
        var open = llista.hidden;
        llista.hidden = !open; btn.textContent = open ? tanca : obre; btn.setAttribute('aria-expanded', String(open));
      });
    }

    // Compte endavant suau (si l'usuari no ha demanat menys moviment)
    var quiet = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (quiet || !('IntersectionObserver' in window)) return;
    num.textContent = '0';
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; io.disconnect();
      var t0 = null, dur = 1100;
      (function pas(t) { if (t0 === null) t0 = t; var p = Math.min(1, (t - t0) / dur); num.textContent = fmt(total * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(pas); else num.textContent = fmt(total); })(performance.now());
    }, { threshold: 0.4 });
    io.observe(card);
  }).catch(function () { /* la targeta continua amagada */ });
})();
