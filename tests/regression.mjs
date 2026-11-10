import fs from 'node:fs';
const recipe=fs.readFileSync(new URL('../js/recipe.js',import.meta.url),'utf8');
const search=fs.readFileSync(new URL('../js/search.js',import.meta.url),'utf8');
const listing=fs.readFileSync(new URL('../js/listing.js',import.meta.url),'utf8');
const css=fs.readFileSync(new URL('../css/recipe.css',import.meta.url),'utf8');
const required=[
 ['filtro tempo',search.includes('LMC.total(r)<=Number(state.time||9999)')],
 ['filtro difficoltà',search.includes("ratings?.difficulty")],
 ['difficoltà card',listing.includes('card-difficulty')],
 ['dose viola',css.includes('.dose.custom')],
 ['ripristina dose',recipe.includes('data-restore')&&recipe.includes('delete pref.overrides')],
 ['resa manuale',recipe.includes('yieldValue')],
 ['resa smart',recipe.includes('yieldSnap')&&recipe.includes('yieldStep')],
 ['preparazione collegata',recipe.includes('target=${encodeURIComponent(value)}')],
 ['barra ricetta unica',recipe.includes('bindJump()')],
 ['porzioni responsive',css.includes('40px minmax(0,1fr) 40px')]
];
let failed=false;for(const [name,ok] of required){console.log(ok?'OK':'KO',name);failed ||= !ok}if(failed)process.exit(1);
