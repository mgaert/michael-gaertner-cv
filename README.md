# Michael Gärtner – IT Career Portfolio

Eine moderne, professionelle und zweisprachige Karriere- und Portfolio-Webseite für Michael Gärtner als Diplom-Informatiker, Softwareentwickler und DevOps Engineer.

**Live:** https://cv.mg-networking.com

## Features

- ✅ Zweisprachig (Deutsch & Englisch)
- ✅ Modernes, responsives Design
- ✅ TypeScript mit strikter Typprüfung
- ✅ Keine Frontend-Frameworks (HTML5, CSS3, vanilla TypeScript)
- ✅ Komponenten-basierte Architektur
- ✅ SEO-optimiert (Canonical, hreflang, Sitemap, robots.txt)
- ✅ Accessibility (WCAG 2.2 AA Richtlinien)
- ✅ PDF-Lebenslauf zum Download
- ✅ Automatisiertes Deployment via GitHub Actions
- ✅ Hosting auf GitHub Pages
- ✅ Mobile-First Design (320px–4K)

## Tech Stack

| Bereich | Technologie |
|---------|-------------|
| HTML | HTML5 |
| Styling | CSS3 |
| Programmiersprache | TypeScript |
| Build-System | Vite |
| Versionsverwaltung | Git & GitHub |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |
| Domain | IONOS (cv.mg-networking.com) |

## Installation

### Voraussetzungen
- Node.js 18+ 
- npm

### Setup

```bash
# Repository klonen
git clone https://github.com/mgaert/michael-gaertner-cv.git
cd michael-gaertner-cv

# Dependencies installieren
npm install
```

## Entwicklung

```bash
# Dev-Server starten
npm run dev
```

Der Server läuft unter http://localhost:5173. Die App unterstützt Hot-Module-Reloading.

### Struktur

```
src/
├── components/      # UI-Komponenten (Header, Hero, Skills, etc.)
├── data/           # Lokalisierungs-Strings (DE & EN)
├── styles/         # CSS (Variablen, Main, Components, Responsive)
├── utils/          # Utilities (Localization)
└── main.ts         # Einstiegspunkt

public/
├── assets/         # Grafiken, Icons
├── cv/             # PDF-Lebenslauf
├── favicon.svg     # Favicon
├── robots.txt      # SEO
└── sitemap.xml     # Sitemap

de/, en/            # HTML-Einstiegspunkte pro Sprache
index.html          # Root-Redirect zur deutschen Version
```

## Build

```bash
# Produktions-Build mit TypeScript-Prüfung
npm run build

# Output: dist/
```

Die Build-Ausgabe wird in `dist/` generiert und enthält:
- Minifiziertes JavaScript und CSS
- HTML für alle Sprachversionen (/, /de/, /en/)
- Public-Assets (Favicon, robots.txt, sitemap.xml, PDFs)

## Deployment

Das Repository ist mit GitHub Actions konfiguriert. Ein Push auf `main` löst automatisch aus:

1. ✅ Dependencies via `npm ci` installieren
2. ✅ TypeScript-Prüfung ausführen
3. ✅ Vite-Build erstellen
4. ✅ Deployment-Artefakt auf GitHub Pages hochladen
5. ✅ Seite unter https://cv.mg-networking.com veröffentlichen

**Workflow-Datei:** `.github/workflows/deploy.yml`

### Manuelle Veröffentlichung

Falls nötig, können Sie den Build auch lokal durchführen:

```bash
npm run build
# dist/ Verzeichnis zu GitHub Pages pushen
```

## Domain-Konfiguration

### Aktuelle Einrichtung

Die Domain `cv.mg-networking.com` ist über IONOS DNS mit GitHub Pages verbunden.

**DNS-Einträge:**
- `cv` → CNAME → `mgaert.github.io`

**Beachte:** Die bestehenden DNS-Einträge für `mg-networking.com` dürfen nicht verändert werden.

### GitHub Pages Konfiguration

Im Repository-Setting unter "Pages":
- ✅ Source: GitHub Actions
- ✅ Custom Domain: cv.mg-networking.com
- ✅ Enforce HTTPS: An

## Sprachen & Routing

Die App ist vollständig zweisprachig implementiert:

- **DE:** `https://cv.mg-networking.com/de/`
- **EN:** `https://cv.mg-networking.com/en/`
- **Root:** `https://cv.mg-networking.com/` → redirects zu /de/

### Sprachumschalter

Der Sprachumschalter ist in der Navigation integriert (oben rechts). Ein Sprachwechsel aktualisiert die URL ohne Seite neu zu laden und speichert die Präferenz in localStorage.

## Inhalte bearbeiten

### Lokalisierungs-Strings

Alle Texte sind in TypeScript-Datenobjekten definiert:
- `src/data/de.ts` – Deutsche Inhalte
- `src/data/en.ts` – Englische Inhalte

### Daten aktualisieren

1. Öffne die entsprechende Datei in `src/data/`
2. Passe Strings an
3. Speichern und Build: `npm run build`

### PDF-Lebenslauf

PDFs sollten in `public/cv/` platziert werden:
- `lebenslauf-de.pdf` – Deutsche Version
- `michael-gaertner-cv-en.pdf` – Englische Version

Die Download-Links sind automatisch funktional, wenn die PDFs vorhanden sind.

## Accessibility

Das Projekt folgt den WCAG 2.2 AA Richtlinien:

- ✅ Semantisches HTML
- ✅ Überschriftenhierarchie (h1–h6)
- ✅ Tastaturbedienbarkeit (Tab, Enter, Esc)
- ✅ Fokuszustände sichtbar
- ✅ Farbkontraste (AAA für kritische Elemente)
- ✅ Alternativtexte für Bilder (aria-label)
- ✅ Unterstützung für `prefers-reduced-motion`
- ✅ ARIA-Labels für komplexe Komponenten

## SEO

- ✅ Individuelle Seitentitel und Meta-Beschreibungen
- ✅ Canonical URLs
- ✅ hreflang-Verknüpfungen (DE ↔ EN)
- ✅ Open Graph Tags
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Strukturierte Daten (soweit sinnvoll)

## Performance

- **Gzip:** CSS ~3 KB, JS ~7 KB
- **Lighthouse:** 90+ auf Mobilgeräten
- **Time to Interactive:** < 1s
- **Keine Drittanbieter-Skripte**

## Datenschutz

- ✅ Keine sensiblen persönlichen Informationen
- ✅ Keine Vollständige Wohnanschrift öffentlich
- ✅ Keine privaten Telefonnummern
- ✅ Keine unnötigen Cookies oder Tracking
- ✅ Kontakt über berufliche E-Mail
- ✅ HTTPS auf allen Seiten

## Lizenz

Dieses Projekt ist persönliches Portfoliomaterial von Michael Gärtner. Alle Rechte vorbehalten.

## Support

Für Fragen oder Fehlerberichte:
- GitHub Issues: https://github.com/mgaert/michael-gaertner-cv/issues
- E-Mail: michael@mg-networking.de
- Website: https://mg-networking.com

---

**Letzte Aktualisierung:** Oktober 2026
