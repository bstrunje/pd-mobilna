# PD Promina Drniš - PWA Mobilna Aplikacija

Jednostavna Progressive Web App (PWA) koja automatski preusmjerava korisnike na glavnu web aplikaciju Promina-Drniš.

## Funkcionalnosti

- Automatsko preusmjeravanje na web aplikaciju kada je instalirana na početni zaslon
- Jasne upute za korisnike kada se otvori u pregledniku
- Mogućnost instalacije na početni zaslon Android i iOS uređaja
- Prilagođeni banneri s uputama za instalaciju
- Radi na svim mobilnim platformama
- Vizualni identitet Promina-Drniš udruge

## Kako koristiti

1. Posjetite službenu stranicu udruge gdje je postavljen link na PWA aplikaciju
2. Na mobilnim uređajima, kliknite "Dodaj na početni zaslon" prema uputama u aplikaciji
3. Nakon instalacije, pokrenite aplikaciju s početnog zaslona
4. Bit ćete automatski preusmjereni na glavnu web aplikaciju

## Deployed verzija

Aplikacija je dostupna na: https://pd-mobilna.vercel.app/

## Prilagodba

Da biste prilagodili aplikaciju:

1. Uredite `index.html` i promijenite `TARGET_URL` na željenu adresu
2. Zamijenite ikone u `/icons` direktoriju sa svojim logotipom
3. Prilagodite boje u `style.css` i vizualni identitet u `manifest.json`

## Tehnički detalji

- PWA aplikacija s podrškom za offline pristup
- Service Worker za lokalno keširanje resursa
- Manifest.json za konfiguraciju PWA iskustva
- Detekcija tipa uređaja za prikaz relevantnih uputa
- Optimizirano za sve veličine zaslona

## Razvoj i testiranje

Za testiranje PWA lokalno, potreban vam je jednostavan lokalni server poput:
- VS Code Live Server dodatak (najjednostavnije rješenje)
- `python -m http.server` (ako imate Python instaliran)
- Bilo koji drugi HTTP server

## Autor

Aplikacija je razvijena za potrebe PD Promina Drniš udruge.