# Vom Fork zum Theme

**Wie Design Tokens meinen Website-Baukasten markenfähig machen**

> Status: Entwurf. Abschnitte 1 bis 5 beschreiben den Ausgangszustand (Tag `v0-baseline`, Commit `530d841`). Abschnitte 6 bis 9 folgen nach der Umsetzung.

---

## 1. Ausgangslage

Mein Baukasten ist ein React-Projekt (TypeScript, Vite) mit wiederverwendbaren Sektions-Templates: Hero, Galerie, Cards, Text mit Bild, Kontaktformular, Footer. Gedacht ist er für kleine Service- und Handwerksbetriebe, die eine eigene Website brauchen, aber kein individuelles Projekt.

Bisher habe ich meinen Baukasten für jede Marke kopiert. Die Entwicklung lässt sich in drei Stufen nachvollziehen:

| Stand | Umgang mit Farben |
|---|---|
| Erstes Grundgerüst | Kein Farbsystem, Tailwind-Theme leer |
| Erste Anwendung auf einen Handwerksbetrieb | Palette in der Tailwind-Config, Farbnamen an die Marke gebunden |
| Peters Elektro GmbH (fiktiv) | Zentrale Farbdatei `cdColors.tsx`, ergänzt durch lokale Kopien |

Jede neue Marke bedeutete einen neuen Fork des Codes. Verbesserungen an einer Version erreichten die anderen nicht, und markengebundene Namen wanderten in das nächste Projekt mit.

Bei einem Experiment mit Figma Make, in dem ich die Navbar von Peters Elektro überarbeitete, zeigte sich ein zweiter Anwendungsfall, der im Berufsalltag häufiger vorkommt: eine bestehende Marke behutsam aufzufrischen. Auch einen solchen Refresh hätte ich bis dahin getrennt von meinem Baukasten in einem eigenen Repository umgesetzt. Ob neue Marke oder überarbeitetes Erscheinungsbild, jede Variante erforderte eine eigene Kopie des Codes. Beide Fälle lassen sich mit demselben Ansatz lösen: mit Design Tokens.

## 2. Problem

**Gleicher Name, andere Farbe**
- Zentrale Farbdatei `cdColors.tsx`, genutzt von 23 Dateien
- 7 Komponenten und Seiten definieren eigene Kopien
- Dort ist `primaryColor` Grün (`#A8CF4E`), zentral Dunkellila (`#232638`)

**Werte außerhalb des Systems**
- 227 Hex-Farbwerte im Code, davon 31 verschiedene
- 64 Inline-Styles
- Tailwind installiert, Theme-Konfiguration leer
- Auch das Navbar-Redesign wiederholt das Muster: 19 verschiedene Farbwerte (inklusive Transparenzstufen) und 42 Inline-Styles in einer einzigen Komponente

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

Eine Codebasis, in der eine Marke über ein Token-Set aufgefrischt oder ausgetauscht wird statt über eine Kopie des Codes.

## 5. Scope

Das Projekt ist als MVP angelegt, das für sich abgeschlossen und veröffentlicht wird. Erweiterungen folgen bei Bedarf als eigenständige Module.

**MVP**

- Farb-Tokens in zwei Ebenen: Primitive und Semantic (nach dem Drei-Ebenen-Modell von Nathan Curtis; die Component-Ebene ist angelegt, bleibt aber vorerst leer)
- Format: DTCG (Design Tokens Community Group)
- Build mit Style Dictionary zu CSS Custom Properties
- `cdColors` verweist auf die erzeugten Variablen, die lokalen Kopien entfallen
- Zweites Theme "Peters Refresh" mit den Farben aus dem Navbar-Redesign, umschaltbar auf der Startseite (nur Farben; Schrift, Verläufe und Animationen des Redesigns bleiben außen vor)

**Abbruchkriterium:** Das MVP ist fertig, wenn "Peters Refresh" auf der Startseite per Umschalter funktioniert und die Kontrastwerte für Fließtext WCAG 2.2 AA erfüllen.

**Mögliche Module**

- Zweite, fiktive Marke aus einem anderen Gewerk (Multi-Brand)
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
