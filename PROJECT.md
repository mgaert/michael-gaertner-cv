# PROJECT.md – Michael Gärtner IT Career Portfolio

## 1. Projektbeschreibung

Entwickle eine moderne, professionelle und zweisprachige Karriere- und Portfolio-Webseite für Michael Gärtner.

Die Webseite soll als eigenständiges GitHub-Pages-Projekt realisiert und unter folgender Domain veröffentlicht werden:

**https://cv.mg-networking.com**

Sie ergänzt die bestehende Webseite https://mg-networking.com und richtet sich insbesondere an IT-Recruiter, Personalverantwortliche und potenzielle Arbeitgeber.

Die Webseite soll Michaels Berufserfahrung, technische Kompetenzen, Zertifizierungen und ausgewählte Entwicklungsprojekte präsentieren.

### Projektziele

- Professionelle Online-Präsentation als IT-Spezialist
- Moderner, übersichtlicher und responsiver Lebenslauf
- Deutsche und englische Sprachversion
- Präsentation technischer Kompetenzen
- Darstellung beruflicher Erfahrungen
- Vorstellung ausgewählter GitHub-Projekte
- Download des Lebenslaufs als PDF
- Automatisiertes Deployment über GitHub Actions
- Hosting über GitHub Pages
- Gute Suchmaschinenoptimierung (SEO)
- Barrierearme Benutzeroberfläche
- Hohe Performance und geringer Wartungsaufwand

---

## 2. Technologie-Stack

Verwende folgende Technologien:

| Bereich | Technologie |
|---|---|
| HTML | HTML5 |
| Styling | CSS3 |
| Programmiersprache | TypeScript |
| Build-System | Vite |
| Versionsverwaltung | Git |
| Repository | GitHub |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |
| Domainverwaltung | IONOS |
| Icons | Lucide oder eigene SVG-Icons |

### Technische Vorgaben

- Kein Angular, React oder Vue
- Keine unnötigen Framework-Abhängigkeiten
- Keine Backend-Infrastruktur
- Keine Datenbank
- Kein erforderlicher externer API-Zugriff
- Kein kostenpflichtiger Hostingdienst
- Strikte TypeScript-Konfiguration
- Komponentenbasierte Architektur
- Wiederverwendbare UI-Komponenten
- Semantisches HTML
- Mobile-First-Design
- Unterstützung für aktuelle Desktop- und Mobilbrowser

Das Projekt soll möglichst schlank und einfach wartbar bleiben.

---

## 3. Repository und Verzeichnisstruktur

GitHub-Benutzername: `mgaert`

Repository-Name:

`michael-gaertner-cv`

Vorgeschlagene Struktur:

```text
michael-gaertner-cv/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── assets/
│   │   ├── portrait.webp
│   │   ├── favicon.svg
│   │   └── og-image.webp
│   │
│   ├── cv/
│   │   ├── lebenslauf-de.pdf
│   │   └── michael-gaertner-cv-en.pdf
│   │
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── header.ts
│   │   ├── hero.ts
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   ├── contact.ts
│   │   └── footer.ts
│   │
│   ├── data/
│   │   ├── de.ts
│   │   └── en.ts
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── main.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── utils/
│   │   └── localization.ts
│   │
│   └── main.ts
│
├── de/
│   └── index.html
│
├── en/
│   └── index.html
│
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── README.md
└── PROJECT.md
```

Die Verzeichnisstruktur darf angepasst werden, sofern die Trennung zwischen Inhalten, Komponenten und Styles erhalten bleibt.

---

## 4. Design und Benutzeroberfläche

### Designrichtung

Modernes, minimalistisches IT-Portfolio mit professioneller, technisch orientierter Gestaltung.

Die Webseite soll Kompetenz und Erfahrung vermitteln, ohne überladen zu wirken.

### Farbkonzept

| Verwendung | Farbe |
|---|---|
| Hauptfarbe | `#101D31` |
| Sekundärfarbe | `#147D76` |
| Akzentfarbe | `#54DBC1` |
| Hintergrund hell | `#F8FAFC` |
| Text dunkel | `#1E293B` |
| Text hell | `#FFFFFF` |

### Gestaltung

- Großzügige Abstände
- Klare Typografie
- Moderne Karten für technische Kompetenzen
- Dezente Hover-Effekte
- Berufliche Timeline
- Zurückhaltende Animationen
- Responsive Navigation
- Gut sichtbare Kontaktmöglichkeiten
- Dunkler Hero-Bereich
- Helle Inhaltsbereiche
- Optionaler Dark Mode

Animationen müssen `prefers-reduced-motion` berücksichtigen.

### Responsive Breakpoints

- Mobile: bis 767 px
- Tablet: 768–1023 px
- Desktop: ab 1024 px

Die Darstellung muss auch bei 320 px Bildschirmbreite sinnvoll funktionieren.

---

## 5. Seitenstruktur

Die Webseite soll als One-Page-Portfolio pro Sprache umgesetzt werden.

### 5.1 Header und Navigation

Navigationselemente:

- Start
- Über mich
- Kompetenzen
- Berufserfahrung
- Projekte
- Zertifikate
- Ausbildung
- Kontakt

Zusätzlich:

- Sprachumschalter DE / EN
- Link zur Hauptwebseite
- PDF-Download

Die Navigation soll auf Mobilgeräten als zugängliches Menü dargestellt werden.

### 5.2 Hero-Bereich

Name:

**Michael Gärtner**

Berufsbezeichnung:

**Diplom-Informatiker | Software Developer | DevOps Engineer**

Weitere Fachgebiete:

- Software Engineering
- Embedded Systems
- DevOps & CI/CD
- Software Testing
- Agile Software Development
- Scrum

Call-to-Action-Elemente:

- Lebenslauf herunterladen
- GitHub besuchen
- Kontakt aufnehmen

Optional soll ein Porträtfoto eingebunden werden.

Kein fremdes oder KI-generiertes Personenfoto verwenden.

### 5.3 Professional Profile

Deutscher Profiltext:

Diplom-Informatiker mit über 17 Jahren Berufserfahrung in der Softwareentwicklung, insbesondere in den Bereichen Embedded Systems, Webtechnologien, DevOps und Softwarequalitätssicherung. Fundierte Kenntnisse in C#, C/C++, Python, TypeScript, Angular sowie in der Automatisierung von CI/CD-Prozessen mit Azure DevOps und Jenkins. Erfahrung in der Testautomatisierung, UML-Modellierung und agilen Softwareentwicklung. Zertifizierter Professional Scrum Master I und II sowie ISTQB Certified Tester. Ergänzend tätig als IT-Fachdozent.

Englischer Profiltext:

Computer Science graduate with over 17 years of professional experience in software development, specializing in embedded systems, web technologies, DevOps, and software quality assurance. Strong expertise in C#, C/C++, Python, TypeScript, Angular, and CI/CD automation using Azure DevOps and Jenkins. Experienced in test automation, UML modeling, and agile software development. Certified Professional Scrum Master I and II and ISTQB Certified Tester. Additional experience as an IT instructor.

---

## 6. Technische Kompetenzen

Die Kompetenzen sollen nach Themenbereichen gruppiert und als übersichtliche Karten dargestellt werden.

### Programming Languages

- C#
- C/C++
- Python
- TypeScript
- JavaScript
- Groovy

### Frameworks and Web Technologies

- .NET 8
- Angular
- Ionic
- HTML5
- CSS3

### DevOps & CI/CD

- Azure DevOps
- Jenkins
- Continuous Integration
- Continuous Deployment
- Gradle
- Build Automation
- Git

### Software Testing

- ISTQB
- TestComplete
- Robot Framework
- Unit Testing
- Automated Testing

### Software Engineering

- Embedded Systems
- UML
- Enterprise Architect
- Axivion Bauhaus Suite
- MISRA

### Databases

- MySQL

### Agile Methods

- Scrum
- Professional Scrum Master I
- Professional Scrum Master II

Keine erfundenen Prozentwerte oder Kompetenzbewertungen anzeigen.

---

## 7. Berufserfahrung

Darstellung als chronologische Timeline, neueste Tätigkeit zuerst.

### Deutsche Angestellten-Akademie (DAA)

**Position:** Dozent für Informatik / IT-Fachdozent

**Zeitraum:** April 2026 – heute, sofern weiterhin tätig

**Standort:** Stuttgart

**Programm:** AsAflex

Aufgaben:

- Vermittlung praxisorientierter IT- und Informatikkenntnisse
- Individuelle fachliche Betreuung und Förderung von Auszubildenden
- Vorbereitung auf Zwischen- und Abschlussprüfungen

### Axians Athos GmbH

**Position:** DevOps Engineer

**Zeitraum:** März 2026 – Oktober 2026

**Standort:** Sindelfingen

Aufgaben:

- Implementierung und Wartung von CI/CD-Pipelines
- Automatisierung von Software-Deployments
- Einsatz von Azure DevOps

### MG-Networking

**Position:** Freiberuflicher Softwareentwickler

**Zeitraum:** April 2025 – heute, sofern weiterhin tätig

**Standort:** Wendlingen

Aufgaben:

- Entwicklung und Pflege von Anwendungen für lokale Unternehmen

### Leuze electronic GmbH + Co. KG

**Position:** Softwareentwickler

**Zeitraum:** April 2008 – Juni 2025

**Standort:** Owen

Aufgaben:

- Entwicklung und Wartung von Softwarelösungen
- Softwareentwicklung im Embedded-Umfeld mit C/C++
- Entwicklung grafischer Benutzeroberflächen
- Einsatz von Angular, Ionic, HTML, CSS und TypeScript
- Datenbankentwicklung und -pflege mit MySQL und C#/.NET
- UML-Modellierung mit Enterprise Architect
- CI/CD mit Jenkins, Python und Groovy
- Automatisierung von C/C++-Buildprozessen mit Gradle
- Statische Codeanalyse mit Axivion
- Unit Testing und Testautomatisierung
- Betreuung von Studierenden und Praktikanten

### MG-Networking – Frühere freiberufliche Tätigkeit

**Zeitraum:** Januar 2005 – Januar 2012

**Standort:** Owen

Aufgaben:

- Webseitenentwicklung
- PHP-Programmierung
- Open-Source-Projekte
- Mathematik-Tutoring

Alle vorhandenen Beschäftigungszeiträume sind vor Veröffentlichung mit dem aktuellen Lebenslauf abzugleichen. Keine Zeitangaben automatisch erfinden oder ändern.

---

## 8. Zertifizierungen

Darstellung als separate Zertifikatskarten.

### Professional Scrum Master II

- Jahr: 2025
- Zertifizierung: PSM II

### Professional Scrum Master I

- Jahr: 2025
- Zertifizierung: PSM I

### ISTQB Certified Tester Foundation Level

- Jahr: 2012
- Zertifizierung: CTFL

Falls Zertifikatslinks verfügbar sind, diese optional ergänzen.

Keine Zertifikatsnummern oder Nachweise erfinden.

---

## 9. Ausbildung

### Diplom-Informatiker

- Hochschule für Technik und Wirtschaft, Aalen
- September 2002 – April 2008

### Professional Scrum Master Weiterbildung

- Karriere Tutor GmbH
- Mai 2025 – Juni 2025

### Abitur

- Technisches Gymnasium, Kirchheim unter Teck
- September 1998 – Juni 2001
- Schwerpunkte: Mathematik und Elektrotechnik

---

## 10. Projektportfolio

Erstelle eine eigenständige Sektion für ausgewählte Softwareprojekte.

Jedes Projekt soll folgende Informationen unterstützen:

- Projektname
- Beschreibung
- Eingesetzte Technologien
- Technische Herausforderungen
- Eigener Beitrag
- GitHub-Link
- Optional Screenshot
- Optional Live-Demo

Die Projektinformationen sollen über TypeScript-Datenobjekte gepflegt werden.

Keine erfundenen Projekte veröffentlichen.

Solange keine konkreten Projekte hinterlegt sind, soll eine neutrale, professionell formulierte Platzhalterdarstellung oder eine ausgeblendete Projektsektion verwendet werden.

### Dieses Portfolio als Referenzprojekt

Die Webseite selbst kann als GitHub-Referenzprojekt dokumentiert werden.

Technologien:

- HTML5
- CSS3
- TypeScript
- Vite
- GitHub Actions
- GitHub Pages

---

## 11. Mehrsprachigkeit

Die Webseite muss vollständig auf Deutsch und Englisch verfügbar sein.

Adressen:

- `https://cv.mg-networking.com/de/`
- `https://cv.mg-networking.com/en/`

Startadresse:

- `https://cv.mg-networking.com/`

Die Startadresse soll standardmäßig auf die deutsche Version weiterleiten.

### Anforderungen

- Gleiche Struktur in beiden Sprachen
- Getrennte Inhaltsdateien
- Wiederverwendbare Komponenten
- Vollständige Übersetzungen
- Korrektes HTML-`lang`-Attribut
- SEO-Metadaten pro Sprache
- `hreflang`-Verknüpfung
- Beibehaltung der aktuellen Sektion beim Sprachwechsel, soweit möglich

Die Sprachumschaltung soll ohne externen Übersetzungsdienst funktionieren.

---

## 12. PDF-Lebenslauf

Bereitstellung zweier PDF-Dateien:

```text
/cv/lebenslauf-de.pdf
/cv/michael-gaertner-cv-en.pdf
```

Auf jeder Sprachseite soll die entsprechende PDF-Version zum Download angeboten werden.

Die PDFs werden als statische Dateien eingebunden.

Falls Dateien fehlen, soll die Webseite trotzdem korrekt gebaut werden. Fehlende Downloads dürfen dann nicht als funktionierende Links dargestellt werden.

---

## 13. GitHub-Integration

Das Repository soll unter dem GitHub-Benutzer `mgaert` angelegt werden.

Repository:

`michael-gaertner-cv`

Die Webseite soll GitHub-Projekte über konfigurierbare Links darstellen.

Eine direkte GitHub-API-Anbindung ist zunächst nicht notwendig.

Es sollen nur explizit freigegebene, öffentliche Projekte angezeigt werden.

Eine spätere API-Integration kann optional vorbereitet werden.

---

## 14. Build und Deployment

### Build-System

Vite mit TypeScript.

Erforderliche npm-Skripte:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  }
}
```

Konfiguriere Vite für einen Multi-Page-Build mit den HTML-Einstiegspunkten:

- `index.html`
- `de/index.html`
- `en/index.html`

Produktionsverzeichnis:

`dist/`

Base-Pfad:

`/`

### GitHub Actions

Erstelle einen Workflow:

`.github/workflows/deploy.yml`

Der Workflow soll:

1. Bei Push auf `main` starten.
2. Das Repository auschecken.
3. Node.js einrichten.
4. Abhängigkeiten über `npm ci` installieren.
5. Den TypeScript- und Vite-Build ausführen.
6. Das `dist`-Verzeichnis als GitHub-Pages-Artefakt hochladen.
7. Die Webseite mit GitHub Pages veröffentlichen.

Verwende die aktuell unterstützten offiziellen GitHub Actions und möglichst festgelegte Commit-SHAs.

Der Workflow benötigt die geeigneten GitHub-Pages-Berechtigungen.

Keine Secrets im Quellcode speichern.

---

## 15. Domain und DNS

### Bestehende Konfiguration

Die Domain `mg-networking.com` wird bei IONOS verwaltet.

Bereits vorhandene DNS-Einträge:

| Typ | Host | Ziel |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | mgaert.github.io |

Diese bestehenden Einträge dürfen nicht verändert oder gelöscht werden.

### Zusätzlicher DNS-Eintrag

Für die neue Portfolio-Webseite wird folgender Eintrag benötigt:

| Feld | Wert |
|---|---|
| Typ | CNAME |
| Hostname | cv |
| Ziel | mgaert.github.io |
| TTL | IONOS-Standard |

### GitHub Pages

Im neuen Repository:

1. GitHub Pages aktivieren.
2. Deployment-Quelle GitHub Actions auswählen.
3. Custom Domain `cv.mg-networking.com` konfigurieren.
4. GitHub-Domain-Verifizierung beachten.
5. Danach DNS bei IONOS ergänzen.
6. DNS-Auflösung prüfen.
7. HTTPS aktivieren.

Die bestehende Webseite `mg-networking.com` muss unverändert erreichbar bleiben.

DNS-Einträge nicht ohne ausdrückliche Freigabe verändern.

---

## 16. Datenschutz und Sicherheit

Die Webseite ist öffentlich zugänglich.

Folgende personenbezogene Informationen sollen nicht öffentlich erscheinen:

- Vollständige Wohnanschrift
- Geburtsdatum
- Private Telefonnummer
- Andere sensible persönliche Angaben

Kontaktaufnahme soll zunächst über eine berufliche E-Mail-Adresse möglich sein.

Kein unnötiges Tracking.

Keine verpflichtenden Drittanbieter-Skripte.

Externe Ressourcen nach Möglichkeit lokal hosten.

Keine vertraulichen Informationen ehemaliger Arbeitgeber veröffentlichen.

Keine betrieblichen Quellcodes ohne ausdrückliche Freigabe verwenden.

Vor Veröffentlichung prüfen, ob für die persönliche beziehungsweise berufliche Webseite ein Impressum und eine Datenschutzerklärung benötigt werden.

---

## 17. Accessibility

Orientierung an WCAG 2.2 AA.

Anforderungen:

- Semantische HTML-Struktur
- Sinnvolle Überschriftenhierarchie
- Tastaturbedienbarkeit
- Sichtbare Fokuszustände
- Gute Farbkontraste
- Aussagekräftige Alternativtexte
- Verständliche Linktexte
- Ausreichend große Bedienelemente
- Unterstützung reduzierter Animationen

---

## 18. SEO

Implementiere:

- Individuelle Seitentitel
- Meta Descriptions
- Canonical URLs
- `hreflang` für DE und EN
- Open Graph Tags
- Favicon
- Sitemap
- robots.txt
- Strukturierte Daten, soweit sinnvoll

Beispiel für den deutschen Seitentitel:

`Michael Gärtner | Softwareentwickler, DevOps Engineer & Scrum Master`

Englisch:

`Michael Gärtner | Software Developer, DevOps Engineer & Scrum Master`

---

## 19. Qualitätsanforderungen

Die Webseite muss folgende Kriterien erfüllen:

- Erfolgreicher TypeScript-Build
- Erfolgreicher Vite-Build
- Keine bekannten JavaScript-Laufzeitfehler
- Funktionierende Navigation
- Funktionierender Sprachwechsel
- Korrekte mobile Darstellung
- Funktionierende interne Links
- Keine toten Download-Links
- Keine fehlerhaften Platzhalter
- Keine erfundenen beruflichen Informationen
- Gute Performance
- Barrierearme Bedienung
- Funktionierendes GitHub-Pages-Deployment
- HTTPS über die eigene Subdomain

---

## 20. Entwicklungsreihenfolge für OpenCode

Arbeite in folgenden Phasen.

### Phase 1 – Projektinitialisierung

- Vite-Projekt mit TypeScript erstellen
- Ordnerstruktur aufbauen
- TypeScript strict mode aktivieren
- CSS-Variablen definieren
- Grundlegende HTML-Struktur aufbauen
- Entwicklungsserver testen

### Phase 2 – Layout und Komponenten

- Header
- Navigation
- Hero-Bereich
- Profil
- Kompetenzkarten
- Berufserfahrung-Timeline
- Projektübersicht
- Zertifikate
- Ausbildung
- Kontaktbereich
- Footer

### Phase 3 – Mehrsprachigkeit

- Deutsche Inhalte integrieren
- Englische Inhalte integrieren
- Sprachumschalter implementieren
- Zwei Sprachrouten bereitstellen
- SEO-Sprachinformationen konfigurieren

### Phase 4 – Designoptimierung

- Responsive Layout
- Mobile Navigation
- Typografie
- Hover-Effekte
- Accessibility
- Performanceoptimierung

### Phase 5 – GitHub Pages

- Produktionsbuild erstellen
- GitHub Actions konfigurieren
- GitHub Pages vorbereiten
- Deployment dokumentieren

### Phase 6 – Veröffentlichung

- Custom Domain konfigurieren
- DNS-Eintrag bei IONOS hinzufügen
- HTTPS aktivieren
- Live-Webseite überprüfen
- Hauptwebseite mit Portfolio verlinken

---

## 21. Arbeitsanweisung für OpenCode

Setze das Projekt auf Basis dieser Spezifikation um.

### Entwicklungsprinzipien

1. Schreibe sauberen, wartbaren TypeScript-Code.
2. Verwende semantisches HTML5.
3. Trenne Inhalte, Komponenten und Styling konsequent.
4. Vermeide unnötige Abhängigkeiten.
5. Bevorzuge einfache Lösungen gegenüber komplexen Frameworks.
6. Achte auf Responsive Design und Accessibility.
7. Implementiere Deutsch und Englisch vollständig.
8. Verwende ausschließlich belegte Lebenslaufdaten.
9. Füge keine erfundenen Projekte, Referenzen oder Erfolge ein.
10. Dokumentiere Installation, lokale Entwicklung und Deployment.

### Vorgehensweise

Beginne mit der Projektstruktur und einer funktionierenden, responsiven Webseite.

Implementiere anschließend die Komponenten, die Mehrsprachigkeit und die Lebenslaufinhalte.

Prüfe das Projekt durch einen erfolgreichen Build.

Erstelle danach die GitHub-Actions-Konfiguration.

Bereite das Deployment für `cv.mg-networking.com` vor.

**Wichtig:** Keine Änderungen an DNS-Einträgen, GitHub-Repository-Einstellungen oder der bestehenden Produktivwebseite ohne ausdrückliche Freigabe ausführen.

### Erwartetes Ergebnis

Ein vollständiges, versionierbares und produktionsfähiges IT-Karriereportfolio mit:

- Modernem, responsivem Design
- Deutscher und englischer Sprachversion
- Berufserfahrung und technischen Kompetenzen
- Zertifizierungen und Projektportfolio
- PDF-Lebenslauf zum Herunterladen
- GitHub-Integration
- Automatisiertem Deployment
- Vorbereitung für die eigene Subdomain

Die Anwendung muss lokal mit `npm run dev` ausführbar und mit `npm run build` erfolgreich baubar sein.
