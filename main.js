(function () {
  "use strict";

  // Schutz gegen Einbettung in fremde Seiten (Clickjacking). GitHub Pages kann dafür
  // keinen Server-Header senden; beim späteren Hoster zusätzlich
  // "Content-Security-Policy: frame-ancestors 'self'" setzen.
  if (window.top !== window.self) {
    var hinweis = document.createElement("p");
    hinweis.className = "framed-note";
    var link = document.createElement("a");
    link.href = window.location.href;
    link.target = "_top";
    link.rel = "noopener";
    link.textContent = "Diese Seite bitte direkt öffnen";
    hinweis.appendChild(link);
    document.body.replaceChildren(hinweis);
    return;
  }

  var jahr = document.getElementById("jahr");
  if (jahr) jahr.textContent = new Date().getFullYear();

  var form = document.getElementById("kontaktformular");
  if (!form) return;
  var meldung = document.getElementById("form-status");

  function zeige(text, art) {
    meldung.className = "form-status" + (art ? " " + art : "");
    meldung.textContent = text;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      zeige("Bitte füllen Sie Name, E-Mail und Nachricht aus und bestätigen Sie die Einwilligung.", "err");
      return;
    }
    if (form.action.indexOf("DEINE-FORM-ID") !== -1) {
      zeige("Das Formular ist noch nicht verbunden. Bitte rufen Sie an oder schreiben Sie eine E-Mail.", "err");
      return;
    }

    zeige("Wird gesendet …");
    fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
      .then(function (res) {
        if (!res.ok) throw new Error();
        form.reset();
        zeige("Danke! Ihre Nachricht ist angekommen, ich melde mich bald.", "ok");
      })
      .catch(function () {
        zeige("Senden hat nicht geklappt. Bitte versuchen Sie es später noch einmal oder rufen Sie an.", "err");
      });
  });
})();
