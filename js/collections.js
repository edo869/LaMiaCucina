'use strict';
LMC.collections={
 favorites(){return LMC.read(LMC.keys.favorites,[])},history(){return LMC.read(LMC.keys.history,[])},
 toggleFavorite(id){let a=this.favorites();LMC.write(LMC.keys.favorites,a.includes(id)?a.filter(x=>x!==id):[id,...a])},
 isFavorite(id){return this.favorites().includes(id)},isSeen(id){return this.history().some(x=>x.id===id)},
 addHistory(id){let a=this.history().filter(x=>x.id!==id);a.unshift({id,at:new Date().toISOString()});LMC.write(LMC.keys.history,a.slice(0,50))},
 preference(recipe){const ref=recipe.ingredients.find(i=>i.id===recipe.referenceIngredientId),p=LMC.read(LMC.keys.prefs+recipe.id,{});return{servings:p.servings??recipe.baseServings,ref:p.ref??ref.quantity,overrides:p.overrides||{},yieldQuantity:p.yieldQuantity??recipe.defaultYield?.quantity??null}},
 savePreference(recipe,pref){LMC.write(LMC.keys.prefs+recipe.id,pref)}
};
