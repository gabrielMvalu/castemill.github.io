# Castemill BI Marketing Site

Acest depozit conține sursele statice pentru site-ul public [Castemill BI](https://www.castemill.com/), platforma SaaS de business intelligence dezvoltată de Castemill SRL.

## Structură
- `docs/` — fișierele publicate automat pe GitHub Pages
- `docs/demo/` — fluxul de demo și pagina de mulțumire
- `docs/Manual-Structura-Aplicatiei.pdf` — manualul public de produs (de încărcat în producție)

## Dezvoltare
1. Clonare depozit și adăugare conținut în `docs/`
2. Deschidere pagini în browser local (folosește o extensie de server static)
3. Actualizare assets și conținut conform marketingului curent

## Deploy: GitHub Pages
- Branch-ul principal este publicat automat prin GitHub Pages (folder `docs/`).
- După actualizări, împinge modificările pe `main` pentru a declanșa publicarea.

## Integrare formular
Formularul de demo utilizează [FormSubmit](https://formsubmit.co/) pentru a trimite cererile direct către `office@castemill.com`. Dacă adresa de destinație se schimbă, actualizează atributul `action` din `docs/demo/index.html`.
