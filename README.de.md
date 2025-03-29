# Language
- [English](README.md)
- [Deutsch](README.de.md)

# billtool  
Eine Webapplikation, die es Nutzern ermöglicht, Rechnungen zu erstellen und zu verwalten

## Installation & Start

1. Frontend installieren und starten:

```bash
cd src/frontend  
npm install  
npm run dev
```

2. Backend installieren und starten (in einem neuen Terminal):

```bash
cd src/backend  
npm install  
npm run dev
```

Die Anwendung ist dann erreichbar unter:  
- Frontend: http://localhost:5173  
- Backend API: http://localhost:3000

## Funktionen

**Frontend:**  
- Moderne, responsive Benutzeroberfläche mit Unterstützung für Dunkel-/Hellmodus mittels Tailwind CSS  
- Dashboard mit Übersicht über Rechnungen und Kennzahlen  
- Rechnungsverwaltung mit Funktionen zum Erstellen und Auflisten  
- Kund:innenverwaltungssystem  
- Produktkatalogverwaltung  
- React Router zur Navigation  
- TypeScript für Typsicherheit

**Backend:**  
- Express.js-Server mit TypeScript  
- SQLite-Datenbank mit Tabellen für:
    - Kund:innen  
    - Produkte  
    - Rechnungen  
    - Rechnungspositionen  
- RESTful API-Endpunkte für:
    - Kund:innenverwaltung  
    - Produktverwaltung  
    - Rechnungserstellung und -auflistung  
- Automatische Berechnung der Mehrwertsteuer  
- Transaktionsunterstützung bei der Rechnungserstellung

## Benutzung

- Das Frontend bietet eine intuitive Oberfläche zur Verwaltung von Rechnungen, Kund:innen und Produkten  
- Verwende das Navigationsmenü, um zwischen den Bereichen zu wechseln  
- Erstelle Kund:innen und Produkte, bevor du Rechnungen erstellst  
- Das Dashboard bietet eine Übersicht aller Aktivitäten  
- Der Dunkel-/Hellmodus kann über den Theme-Schalter in der oberen rechten Ecke umgeschaltet werden

Das System ist bereit für grundlegende Rechnungsverwaltungsfunktionen und kann um weitere Funktionen wie PDF-Export, E-Mail-Benachrichtigungen und erweiterte Berichte ergänzt werden.