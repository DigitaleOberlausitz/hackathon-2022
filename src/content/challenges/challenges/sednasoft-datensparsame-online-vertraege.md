## Über SednaSoft

![SednaSoft logo](/challenge_details/sedna-logo.svg)

Seit 2005 stellen wir im Auftrag von kleinen und mittelständischen Unternehmen, aber auch einigen größeren Unternehmen, individuelle Softwarelösungen her. Unser Hauptbetätigungsfeld sind Web-Applikationen und Web-basierte Schnittstellen (APIs). Als MINT-Personen aus vollem Herzen sind wir agil, immer am Puls der Zeit und mit großer Begeisterung Teil der Open Source Community — als Nutzende und als Beitragende.

## Einleitung

Manchmal sind Verträge unerlässlich, aber zu häufig ist es auch verschwendetes Papier. Selbst, wenn sie per E-Mail verschickt werden, wird oft der Drucker bemüht, damit sie unterschrieben und nachher wieder eingescannt werden können. Das konsumiert nicht nur wertvolle Ressourcen sondern ist auch noch unbequem und zeitraubend. Digitale Lösungen gibt es von namhaften Anbietern, aber was passiert mit den Dokumenten, über welche Servers laufen sie und warum kann es nicht ein regionale, datenschutzfreundliche und bequeme Lösung geben?

## Die Challenge

Es soll ein Dienst entwickelt werden, mit dem eine Person Alice in der Lage ist, ein PDF-Dokument an Person Bob zu schicken, worauf Bob auf kryptografischem Wege die Kenntnisnahme und das Einverständnis mit diesem Dokument zurück an Alice sendet. Der Dienst soll dabei so wenig wie möglich Informationen speichern. Die E-Mail-Adressen der Beteiligten sollen höchstens verschlüsselt aufbewahrt werden und das Dokument selbst höchstens als Hash.

In der einfachsten Variante meldet Alice sich beim Dienst an und gibt die eigene E-Mail-Adresse und die von Bob an. Der Dienst sendet eine Bestätigungs-E-Mail an Alice, um zunächst deren Identität zu verifizieren. Danach erfolgt die eigentliche Übermittlung der Vertragsdatei. Dies kann per E-Mail an eine besondere Adresse oder per Upload auf einem Web-Formular erfolgen. Wichtig ist, dass durch digitale Signaturen später zweifelsfrei nachvollziehbar sein muss, wann wer was gesendet hat, um das erteilte Einverständnis nachzuweisen.

Als Zusatzaufgabe oder Ausbaustufe soll es beiden Vertragsparteien möglich sein, Zusatzbedingungen oder Abweichungen zu formulieren. Als Beispiel sendet Alice wieder ein vorbereitetes Dokument an Bob. Bob möchte aber nicht einfach so unterzeichnen, sondern nur unter der Bedingung, dass die vorgeschlagene Laufzeit 14 Tage kürzer ist als in dem Dokument. Durch Bobs Änderungen wird nun auch eine Einverständniserklärung von Alice notwendig. Beide Seiten sollen also jeweils ihr Einverständnis an weitere Name-Wert-Paare knüpfen können, bis die Gegenseite schließlich das finale Einverständnis ohne weitere geänderte oder hinzugefügte Nebenabreden erteilt.

Da der Dienst so datensparsam wie möglich sein sollte, ist es als Ziel der Challenge zu verstehen, dass möglichst alle Schritte durch digitale Signaturen bestätigt werden, die sich in den E-Mails selbst befinden. Auf dem Server sollen so wenige Informationen wie möglich gespeichert werden und auf keinen Fall persönliche Daten. Die Nutzung bestehender offene Standards ist nicht nur aus Sicherheitsgründen empfohlen, sondern trägt auch zu einer guten Akzeptanz und Vertrauenswürdigkeit der erstellten Lösung bei.

## Was wir zur Verfügung stellen

- Anleitungen
- Online-Ressourcen
- Mitarbeiter\*in vor Ort bei Fragen

## Preise

1. Platz: TBA
2. Platz: TBA
3. Platz: TBA

## Bewertungskriterien

- Konzept
- Prototyp
- Demonstration unter Realbedingungen
