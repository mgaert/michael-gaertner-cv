# Deployment – Anleitung zur Veröffentlichung

Dieses Dokument beschreibt, wie das Portfolio bereitgestellt wird und welche Schritte für Veröffentlichung auf `cv.mg-networking.com` notwendig sind.

## Übersicht

Das Projekt nutzt **GitHub Pages** für das Hosting und **GitHub Actions** für automatisiertes Deployment.

```
Code-Push (main)
    ↓
GitHub Actions Workflow
    ├─ npm install
    ├─ TypeScript Check
    ├─ Vite Build
    └─ Deploy to GitHub Pages
    ↓
Website live auf https://cv.mg-networking.com
```

## Automatisiertes Deployment

### Wie es funktioniert

1. **Push auf `main`-Branch**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. **GitHub Actions wird ausgelöst**
   - Workflow-Datei: `.github/workflows/deploy.yml`
   - Status: https://github.com/mgaert/michael-gaertner-cv/actions

3. **Build- und Deploy-Prozess**
   - Dependencies werden installiert (`npm ci`)
   - TypeScript-Prüfung (`tsc --noEmit`)
   - Vite-Build (`vite build`)
   - Artefakt wird zu GitHub Pages hochgeladen
   - Seite ist nach 1–2 Minuten live

4. **Verifizierung**
   - Browser öffnen: https://cv.mg-networking.com
   - Überprüfe deutsch (/de/) und englisch (/en/)
   - Kontrolliere alle Sektionen und Links

## Lokale Vorbereitungen vor dem Push

### Build-Test durchführen

Vor dem Push sollte der Build lokal getestet werden:

```bash
npm run build
```

✅ **Erfolgreich**, wenn:
- Kein TypeScript-Fehler
- Keine Build-Fehler
- `dist/` Verzeichnis enthält HTML, CSS, JS
- `dist/de/index.html` und `dist/en/index.html` existieren

### Dev-Server testen

```bash
npm run dev
```

- Öffne http://localhost:5173
- Teste Deutsch und Englisch (/de/, /en/)
- Überprüfe alle Seiten-Abschnitte
- Teste Sprachwechsel
- Überprüfe Links und Buttons

## GitHub Pages Konfiguration (einmalig)

Diese Schritte müssen nur einmal durchgeführt werden:

### 1. Repository-Einstellungen

Gehe zu https://github.com/mgaert/michael-gaertner-cv/settings/pages

- **Source:** GitHub Actions
- **Branch:** (nicht erforderlich bei GitHub Actions)

### 2. Custom Domain konfigurieren

```
Settings → Pages → Custom Domain
Eingabe: cv.mg-networking.com
Speichern
```

GitHub generiert eine `CNAME`-Datei im Root. Diese wird automatisch zu dist/ kopiert.

### 3. HTTPS aktivieren

- Nach Custom Domain Eingabe: Warten auf DNS-Verifizierung
- Haken setzen bei "Enforce HTTPS"
- GitHub stellt automatisch SSL/TLS-Zertifikat bereit

## DNS-Konfiguration bei IONOS

⚠️ **Diese Schritte erfordern Freigabe vor Ausführung!**

### Aktueller Status

Bestehende Einträge für `mg-networking.com`:
```
@ (A)         185.199.108.153
@ (A)         185.199.109.153
@ (A)         185.199.110.153
@ (A)         185.199.111.153
www (CNAME)   mgaert.github.io
```

### Neuer Eintrag für Portfolio

```
Hostname: cv
Typ:      CNAME
Ziel:     mgaert.github.io
TTL:      IONOS-Standard (3600)
```

**Schritte in IONOS Control Panel:**

1. Anmelden bei https://admin.ionos.com
2. Domain `mg-networking.com` auswählen
3. DNS-Verwaltung → Alle DNS-Einträge
4. Neuen Eintrag hinzufügen:
   - Name: `cv`
   - Typ: CNAME
   - Ziel: `mgaert.github.io`
   - TTL: Standard
5. Speichern

### DNS-Propagation

Nach Änderung in IONOS:
- DNS braucht 5–30 Minuten zum Propagieren
- Test mit: `nslookup cv.mg-networking.com`
- Erwartet: `cv.mg-networking.com → mgaert.github.io`

## Veröffentlichungs-Checkliste

### Vor dem Push

- [ ] `npm run dev` – Lokale Tests bestanden
- [ ] `npm run build` – Build ohne Fehler
- [ ] `dist/` Verzeichnis überprüft
- [ ] Alle Links funktionieren
- [ ] SEO-Metadaten korrekt
- [ ] Responsive Design auf Mobile getestet

### Push durchführen

```bash
# Änderungen hinzufügen
git add .

# Commit mit aussagekräftiger Message
git commit -m "Update: [Beschreibung der Änderungen]"

# Zu main pushen
git push origin main
```

### Nach dem Push

- [ ] GitHub Actions Workflow überwachen
- [ ] https://github.com/mgaert/michael-gaertner-cv/actions
- [ ] Auf grünen Haken warten (Build erfolgreich)
- [ ] https://cv.mg-networking.com aufrufen
- [ ] Browser-Cache löschen (Strg+Shift+Del)
- [ ] Alle Seiten überprüfen
- [ ] Links testen
- [ ] Mobile-Version kontrollieren

## Fehlerbehebung

### Deployment fehlgeschlagen

**Workflow-Fehler anschauen:**
- https://github.com/mgaert/michael-gaertner-cv/actions
- Failed Job anklicken
- Fehler-Details analysieren

**Häufige Fehler:**
- `npm ci` fehlgeschlagen → package-lock.json prüfen
- `tsc --noEmit` fehlgeschlagen → TypeScript-Fehler beheben
- `vite build` fehlgeschlagen → Build lokal testen (`npm run build`)

### Seite zeigt alte Inhalte

- Browser-Cache leeren (Strg+Shift+Del)
- Incognito-Tab öffnen
- Service Worker clearen (DevTools → Application)

### Custom Domain funktioniert nicht

- CNAME-Eintrag bei IONOS prüfen
- DNS-Propagation abwarten (bis 30 Min)
- Test: `nslookup cv.mg-networking.com`
- GitHub Pages Settings erneut öffnen und speichern

### HTTPS-Zertifikat wird nicht generiert

- Warten Sie 24 Stunden nach Custom Domain Eingabe
- Wenn immer noch kein Cert: GitHub Support kontaktieren

## Rückgängigmachen

Falls etwas schiefgeht:

```bash
# Letzten Commit rückgängig machen
git revert HEAD

# Oder: zu letztem funktionierendem Commit zurück
git reset --hard <commit-sha>
git push origin main --force

# GitHub Actions wird neu getriggert
# Website sollte nach 1–2 Min. wieder funktionieren
```

## Automatische Redeploy erzwingen

```bash
# Leeren Commit erstellen (triggert Workflow)
git commit --allow-empty -m "Trigger redeploy"
git push origin main
```

## Monitoring

### GitHub Actions Status
- https://github.com/mgaert/michael-gaertner-cv/actions

### Deployment History
- https://github.com/mgaert/michael-gaertner-cv/deployments

### Live-Website
- https://cv.mg-networking.com
- https://cv.mg-networking.com/de/
- https://cv.mg-networking.com/en/

## Performance überprüfen

```bash
# Lighthouse (Chrome DevTools)
- F12 → Lighthouse
- Generate report
- Ziel: 90+ auf allen Kategorien

# Web.dev Speed Insights
- https://pagespeed.web.dev/
- URL eingeben
- Performance-Metriken prüfen
```

## Kontakt & Support

- **GitHub Issues:** https://github.com/mgaert/michael-gaertner-cv/issues
- **E-Mail:** michael@mg-networking.de
- **Website:** https://mg-networking.com

---

**Version:** 1.0  
**Letzte Aktualisierung:** Oktober 2026
