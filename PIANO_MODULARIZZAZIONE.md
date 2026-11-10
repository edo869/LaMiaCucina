# Piano di modularizzazione

1. Congelamento clean-5 come baseline funzionale.
2. Separazione per responsabilità, senza file patch versionati.
3. Un solo proprietario per ogni funzione.
4. Test statici e deterministici prima della consegna.
5. Restyling solo dopo la validazione della baseline modular-1.

## Regola futura
Una modifica alla resa interviene in `js/recipe.js` e `css/recipe.css`; una modifica ai filtri in `js/search.js`; una modifica alle card in `js/listing.js` e `css/listing.css`.
