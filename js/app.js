'use strict';
LMC.app={
 menu(){const open=()=>{LMC.$('#sideMenu').classList.add('open');LMC.$('#menuBackdrop').hidden=false},close=()=>{LMC.$('#sideMenu').classList.remove('open');LMC.$('#menuBackdrop').hidden=true};LMC.$('#menuBtn').onclick=open;LMC.$('#menuClose').onclick=close;LMC.$('#menuBackdrop').onclick=close;LMC.$$('#sideMenu a').forEach(a=>a.onclick=close)},
 async render(){if(LMC.state.scrollHandler){removeEventListener('scroll',LMC.state.scrollHandler);LMC.state.scrollHandler=null}const route=LMC.route();if(route.type==='home')LMC.listing.home();else if(route.type==='category')LMC.listing.category(route.id);else if(route.type==='favorites')LMC.listing.favorites();else if(route.type==='history')LMC.listing.history();else await LMC.recipe.render(route.id,route.params);if(route.type==='recipe')scrollTo(0,0)},
 async init(){this.menu();[LMC.state.recipes,LMC.state.categories]=await Promise.all([fetch('./data/recipes-index.json').then(r=>r.json()),fetch('./data/categories.json').then(r=>r.json())]);LMC.state.categories.sort((a,b)=>a.order-b.order);if(!location.hash)location.hash='#/';await this.render();navigator.serviceWorker?.register('./service-worker.js')}
};
addEventListener('hashchange',()=>LMC.app.render());LMC.app.init().catch(error=>{console.error(error);LMC.$('#app').innerHTML=`<div class="empty">Errore: ${error.message}</div>`});
