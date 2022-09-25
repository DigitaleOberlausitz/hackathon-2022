## Über ZEISS Digital Innovation

![ZEISS logo](/challenge_details/zeiss-logo-rgb.jpg)

Im Auftrag unserer Kunden entwickeln wir individuelle, marktprägende Health- und Manufacturing Solutions. Unsere hohe
Branchenexpertise und das breite Verständnis für technologische Neuerungen gepaart mit einem agilen Mindset sorgen für
Schnelligkeit und Kreativität in der Entwicklung innovativer Lösungsideen.

## Einleitung

PLCs (Programmable Logic Controller) steuern seit vielen Jahrzehnten Maschinen in der Industrie. Die dafür entwickelte
Software ist nur auf PLCs lauffähig - es sei denn die PLC wird mit Hilfe von Tools wie PLCSIM Advanced virtualisiert.
Dann kann man PLC Software auf der Entwicklungsumgebung ausführen und benötigt keine zusätzliche Hardware. Lediglich
eine Simulation des Maschinenverhaltens (Sensoren, Aktoren) wird benötigt, die mit der virtuellen PLC von PLCSIM
Advanced kommuniziert.

## Die Challenge

Du entwickelst ein Framework, das die Kommunikation mit der C#-API von PLCSIM Advanced übernimmt und vor der
Maschinensimulation kapselt. Die Maschinensimulation ist eine logische Verknüpfung von Sensoren und Aktoren und ist dem
erwarteten Maschinenverhalten nachempfunden. Dein Framework erlaubt eine verständliche Beschreibung einer solchen
Simulationslogik.

Beispiel:

-   Setze Lichtschranke1-Signal auf true
-   Assert Motorschütz1-Signal ist true für 5 Sekunden

Ziel ist es, mit Hilfe deines Frameworks schnell und unkompliziert Simulationen zu programmieren, die dann als Mock für
Entwickler oder als Testfälle für Tester dienen können.

![](/challenge_details/zeiss1_pic1.png)

(Bild modifiziert übernommen aus:
[https://support.industry.siemens.com/cs/document/109739660/simatic-s7%E2%80%91plcsim-advanced-co%E2%80%91simulation-via-api?dti=0&lc=en-DE](https://support.industry.siemens.com/cs/document/109739660/simatic-s7%E2%80%91plcsim-advanced-co%E2%80%91simulation-via-api?dti=0&lc=en-DE),
15.09.2022)

## Was wir zur Verfügung stellen

-   Fischertechnik Lernfabrik 4.0 mit Siemens S7-1500 PLC als praktisches Anschauungsbeispiel
-   Ein Mitarbeiter vor Ort steht jederzeit für Fragen zur Verfügung

## Bewertungskritieren

-   Lauffähiger Prototyp
-   Simulation vom Lernfabrik-Verhalten
-   Beschreibungsmöglichkeit für Maschinenverhalten
