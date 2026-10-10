# Vom Fork zum Theme

**Wie Design Tokens meinen Website-Baukasten markenfähig machen**

> Status: Entwurf. Abschnitte 1 bis 5 beschreiben den Ausgangszustand (Tag `v0-baseline`, Commit `530d841`). Abschnitte 6 bis 9 folgen nach der Umsetzung.

---

## 1. Ausgangslage

Der Baukasten ist ein React-Projekt (TypeScript, Vite) mit wiederverwendbaren Sektions-Templates: Hero, Galerie, Cards, Text mit Bild, Kontaktformular, Footer. Gedacht ist er für kleine Service- und Handwerksbetriebe, die eine eigene Website brauchen, aber kein individuelles Projekt.

Bisher habe ich den Baukasten für jede Marke kopiert. Die Entwicklung lässt sich in drei Stufen nachvollziehen:

| Stand | Umgang mit Farben |
|---|---|
| Erstes Grundgerüst | Kein Farbsystem, Tailwind-Theme leer |
| Erste Anwendung auf einen Handwerksbetrieb | Palette in der Tailwind-Config, Farbnamen an die Marke gebunden |
| Peters Elektro GmbH (fiktiv) | Zentrale Farbdatei `cdColors.tsx`, ergänzt durch lokale Kopien |

Jede neue Marke bedeutete einen neuen Fork des Codes. Verbesserungen an einer Version erreichten die anderen nicht, und markengebundene Namen wanderten in das nächste Projekt mit.

## 2. Problem

**Bedeutungsdrift.** Die Farben von Peters Elektro liegen zentral in `utils/cdColors.tsx`, und 23 Dateien nutzen diese Datei. Sieben Komponenten und Seiten definieren aber eigene Kopien davon. In allen sieben Kopien steht `primaryColor` für Grün (`#A8CF4E`), in der zentralen Datei für Dunkellila (`#232638`). Derselbe Name hat damit zwei Bedeutungen, je nachdem, welche Datei man öffnet.

**Werte außerhalb des Systems.** Im Code stehen 227 Hex-Farbwerte, davon 31 verschiedene, und 64 Inline-Styles. Tailwind ist installiert, die Theme-Konfiguration ist aber leer.

**Keine Quelle im Design.** In Figma sind die Markenfarben als Farbflächen im Moodboard angelegt, nicht als Styles oder Variables. Farben wurden beim Gestalten von dort abgegriffen und im Code von Hand übertragen. Eine verbindliche Quelle gab es weder im Design noch im Code.

**Uneinheitliche Typografie.** Fünf Schriftfamilien werden geladen, im Code referenziert sind nur zwei (Lato, Unica One). Eine Typo-Skala gibt es nicht, Schriftgrößen von 15, 16, 17 und 18 px liegen nebeneinander.

**Kontrast.** *(Noch auf der Live-Seite zu bestätigen.)* Der Sekundärtext `#6D6D6D` erreicht rechnerisch auf mehreren farbigen Hintergründen der Palette nicht das WCAG-2.2-Minimum von 4.5:1 für Fließtext, z. B. 2.9:1 auf Blau `#80CDDE` und 3.4:1 auf Grün `#9EDFB9`.

## 3. Audit

Erhoben am 10.10.2026 auf dem Stand `v0-baseline`.

| Kennzahl | Wert |
|---|---|
| Hex-Farbwerte in TSX-Dateien | 227 |
| davon verschiedene Werte | 31 |
| Inline-Styles (`style={{…}}`) | 64 |
| Dateien, die `cdColors` nutzen | 23 |
| Lokale Kopien der Farbdefinition | 7 |
| Geladene Schriftfamilien | 5 |
| davon im Code verwendet | 2 |
| Farben in Figma als Styles oder Variables | 0 |

Zusätzliche Auffälligkeiten in `cdColors.tsx`:

- Bei drei von fünf Hintergrundskalen sind Light, Default und Dark identisch
- `tertiaryColor` (`#FCF6A5`, ein Gelb) ist als "teal" kommentiert
- Rollen sind nummeriert (primary bis quinary) statt nach ihrer Funktion benannt

## 4. Ziel

Eine Codebasis, in der eine neue Marke über ein Token-Set entsteht statt über eine Kopie des Codes.

## 5. Scope

Das Projekt ist als MVP angelegt, das für sich abgeschlossen und veröffentlicht wird. Erweiterungen folgen bei Bedarf als eigenständige Module.

**MVP**

- Farb-Tokens in zwei Ebenen: Primitive und Semantic (nach dem Drei-Ebenen-Modell von Nathan Curtis; die Component-Ebene ist angelegt, bleibt aber vorerst leer)
- Format: DTCG (Design Tokens Community Group)
- Build mit Style Dictionary zu CSS Custom Properties
- `cdColors` verweist auf die erzeugten Variablen, die lokalen Kopien entfallen
- Eine zweite, fiktive Marke als Farbpalette, umschaltbar auf der Startseite

**Abbruchkriterium:** Das MVP ist fertig, wenn die zweite Marke auf der Startseite per Umschalter funktioniert und die Kontrastwerte für Fließtext WCAG 2.2 AA erfüllen.

**Mögliche Module**

- Typografie-Tokens
- Component-Tokens (Button, Card)
- Figma-Sync mit Tokens Studio
- Tailwind-Mapping
- Dark Mode
- Automatischer Kontrast-Check im Build
- Dokumentation in Storybook

---

## 6. Entscheidungen

*Folgt.*

## 7. Umsetzung

*Folgt.*

## 8. Ergebnis

*Folgt.*

## 9. Nächste Schritte

*Folgt.*
