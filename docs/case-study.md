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

**Gleicher Name, andere Farbe**
- Zentrale Farbdatei `cdColors.tsx`, genutzt von 23 Dateien
- 7 Komponenten und Seiten definieren eigene Kopien
- Dort ist `primaryColor` Grün (`#A8CF4E`), zentral Dunkellila (`#232638`)

**Werte außerhalb des Systems**
- 227 Hex-Farbwerte im Code, davon 31 verschiedene
- 64 Inline-Styles
- Tailwind installiert, Theme-Konfiguration leer

**Keine Quelle im Design**
- Markenfarben in Figma nur als Farbflächen, nicht als Styles oder Variables
- Farben von Hand in den Code übertragen

**Uneinheitliche Typografie**
- 5 Schriftfamilien geladen, 2 genutzt
- Keine Typo-Skala: 15, 16, 17 und 18 px nebeneinander

**Kontrast** *(noch live zu bestätigen)*
- Sekundärtext `#6D6D6D` verfehlt auf farbigen Flächen WCAG 2.2 AA (4.5:1), z. B. 2.9:1 auf Blau, 3.4:1 auf Grün

## 3. UI-Audit (Bestandsaufnahme)

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

## 7. Lösung

*Folgt.*

## 8. Ergebnis

*Folgt.*

## 9. Nächste Schritte

*Folgt.*
