# Website Versicherungsmakler

Reine HTML/CSS-Seite ohne Build-Schritt. Läuft auf GitHub Pages und lässt sich später auf jeden Hoster kopieren (einfach alle Dateien hochladen).

## Dateien
- `index.html` – Startseite: Einstieg, Leistungen, Ablauf, Über mich, Kontaktformular
- `impressum.html` – Impressum (§ 5 DDG, inkl. Makler-Pflichtangaben)
- `erstinformation.html` – Statusinformation nach § 15 VersVermV
- `datenschutz.html` – Datenschutzerklärung (GitHub Pages + Formspree)
- `style.css` – Design, Farben (nach dem Logo: Blau #324384), Schriften
- `bilder/` – Logo-Zeichen (`nk-logo.png`), Favicon und Porträtfoto, alle aus der alten Website ausgeschnitten. Das Foto ist klein (194 × 226 px); ein schärferes Foto wäre besser.
- `fonts/` – Schriften lokal eingebunden (Bricolage Grotesque, Source Sans 3, OFL-Lizenz), damit keine Daten an Google gehen

## Platzhalter ausfüllen
Alle offenen Stellen sind auf der Seite **gelb markiert** (`<span class="ph">[…]</span>`). Beim Ersetzen das `span` mit entfernen.
Suche in allen Dateien nach `class="ph"`.

**Orange markiert** (`<span class="neu">…</span>`) sind Angaben, die von der alten Website (makler-kunzmann.de) übernommen wurden: Name, Anschrift, Telefon, Fax, E-Mail, IHK, Registernummern (§ 34d und § 34f), Berufshaftpflicht, Schlichtungsstellen, Region, Foto. Bitte prüfen, ob sie noch stimmen, und danach das `span` (bzw. beim Foto die Klasse `neu`) entfernen. Suche nach `neu`.

| Angabe | Wo |
|---|---|
| Vor- und Nachname, Firmenname | alle Seiten (Kopfzeile), Impressum, Erstinformation, Datenschutz, Fußzeile |
| Seitentitel (`<title>`) | `index.html` Zeile 6 |
| Straße, PLZ, Ort | Kontakt, Impressum, Erstinformation, Datenschutz |
| Telefon, E-Mail | Kontakt, Impressum, Erstinformation, Datenschutz |
| Ort / Region | Startseite (Einstieg, Über mich) |
| Werdegang, Jahre Erfahrung, Qualifikation | Über mich |
| Zuständige IHK (Erlaubnisbehörde) | Impressum, Erstinformation |
| Vermittlerregister-Nr. (D-XXXX-XXXXX-XX) | Impressum, Erstinformation, Fußzeile |
| USt-IdNr. (falls vorhanden, sonst Abschnitt löschen) | Impressum |
| Vergütung (Courtage, Zuwendungen, Honorar) | Erstinformation |
| Beteiligungen über 10 % bestätigen | Erstinformation |
| Teilnahme an Schlichtung bestätigen | Impressum |
| Zuständige Landesdatenschutzbehörde | Datenschutz |
| Formspree: Rechtsgrundlage USA-Übermittlung prüfen | Datenschutz |
| Stand (Monat Jahr) | Datenschutz |

## Kontaktformular (Formspree)
1. Kostenloses Konto auf formspree.io anlegen (Zieladresse = E-Mail des Vaters).
2. Neues Formular anlegen, die ID kopieren (z. B. `xabcdwxy`).
3. In `index.html` `DEINE-FORM-ID` durch die ID ersetzen.

Bis dahin zeigt das Formular einen Hinweis, dass Anrufen oder E-Mail nötig ist.

In Formspree unter den Formular-Einstellungen die Spamfilterung aktiviert lassen und, falls im Tarif verfügbar, nur Absendungen von der eigenen Domain erlauben. Die Längenbegrenzung im Formular (`maxlength`) wirkt nur im Browser; wer direkt an Formspree sendet, umgeht sie.

## Vor dem ersten Commit: E-Mail-Adresse schützen
Jeder Git-Commit enthält die E-Mail-Adresse des Autors, bei einem öffentlichen Repo für alle sichtbar.
1. Auf GitHub: Settings → Emails → „Keep my email addresses private“ und „Block command line pushes that expose my email“ aktivieren.
2. Die dort angezeigte Adresse (`…@users.noreply.github.com`) im Projektordner eintragen:
   `git config user.email "ID+Maxikiiing@users.noreply.github.com"`
3. Prüfen mit `git config user.email`.

## Sicherheit
- Jede HTML-Seite enthält eine Content-Security-Policy (`<meta http-equiv="Content-Security-Policy">`). Neue Skripte, Bilder oder Dienste von anderen Servern werden dadurch blockiert, bis sie dort eingetragen sind. JavaScript gehört in `main.js`, nicht direkt ins HTML.
- `_config.yml` verhindert, dass `README.md` und `SICHERHEIT.md` veröffentlicht werden.
- Details zur Prüfung: `SICHERHEIT.md`.

## Später umziehen
Bei einem bezahlten Hoster (z. B. mit eigener Domain) alle Dateien hochladen und in `datenschutz.html` Abschnitt 2 (Hosting) auf den neuen Anbieter anpassen. Bietet der Hoster eigene Formulare an, kann Formspree ersetzt werden; dann Abschnitt 3 ebenfalls anpassen.

Beim neuen Hoster diese Header setzen (geht auf GitHub Pages nicht):
```
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
```
Und HTTPS erzwingen (bei fast allen Hostern ein Schalter).

**Eigene Domain und Domain-Übernahme vermeiden:**
1. Wenn die Domain auf GitHub Pages zeigt: auf GitHub unter Settings → Pages → „Verified domains“ die Domain verifizieren. Dann kann sie kein anderes GitHub-Konto verwenden.
2. Beim Umzug zuerst die DNS-Einträge auf den neuen Hoster umstellen, erst danach GitHub Pages abschalten.
3. Keine DNS-Einträge stehen lassen, die noch auf `maxikiiing.github.io` zeigen.

## Hinweis
Die Rechtstexte sind eine sorgfältige Vorlage, aber keine Rechtsberatung. Vor dem Livegang lohnt ein Abgleich mit einem Generator (z. B. e-recht24) oder ein kurzer Blick der IHK bzw. eines Anwalts.
