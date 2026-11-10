# La Mia Cucina - baseline modular-1

Refactoring tecnico della clean-5. Nessuna nuova funzione volontaria.

## Proprietari delle funzioni
- `js/core.js`: utilità, routing, formattazione, stato globale.
- `js/search.js`: ricerca, filtri, ordinamento e toolbar.
- `js/collections.js`: Preferite, Storico, preferenze ricetta.
- `js/listing.js`: Home, categorie, Preferite, Storico e card.
- `js/recipe.js`: porzioni, dosi, resa, preparazioni collegate, Rapida/Dettagliata.
- `js/app.js`: bootstrap, menu e dispatch delle rotte.
- `css/base.css`: struttura generale e menu.
- `css/listing.css`: liste, card, filtri, categorie.
- `css/recipe.css`: ricetta, porzioni, resa e preparazioni.

Mantiene le cartelle esistenti `data/`, `images/`, `icons/` e `manifest.webmanifest`.
