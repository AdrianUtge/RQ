// Declarations des varibles

// Exemple de menu qui sera plus tard directement fait depuis le panneau d'administartion
let menu =
{
    "lundi": { "entre": "Fromage", "plat": "Pates", "dessert": "Mousse au chocolat", },
    "mardi": { "entre": "Salade", "plat": "Fondue", "dessert": "Gateau au chocolat", },
    "jeudi": { "entre": "Pate de campage", "plat": "Quiche lorraine", "dessert": "mousse au chocolat", },
    "vendredi": { "entre": "Taboule", "plat": "Steak tartare", "dessert": "mousse au chocolat", },
}

//Lundi
let entrelundi = menu.lundi.entre;
let platlundi = menu.lundi.plat;
let dessertlundi = menu.lundi.dessert;

//Mardi
let entremardi = menu.mardi.entre;
let platmardi = menu.mardi.plat;
let dessertmardi = menu.mardi.dessert;

//Jeudi
let entrejeudi = menu.jeudi.entre;
let platjeudi = menu.jeudi.plat;
let dessertjeudi = menu.jeudi.dessert;

//Vendredi
let entrevendredi = menu.vendredi.entre;
let platvendredi = menu.vendredi.plat;
let dessertvendredi = menu.vendredi.dessert;



// Ramplacement des menus
function remplace(id, data) {
    document.getElementById(id).innerHTML = data;
}


// lundi
remplace("LundiEntre", menu.lundi.entre);
remplace("LundiPlat", menu.lundi.plat);
remplace("LundiDessert", menu.lundi.dessert);

// mardi
remplace("MardiEntre", menu.mardi.entre);
remplace("MardiPlat", menu.mardi.plat);
remplace("MardiDessert", menu.mardi.dessert);

// jeudi
remplace("JeudiEntre", menu.jeudi.entre);
remplace("JeudiPlat", menu.jeudi.plat);
remplace("JeudiDessert", menu.jeudi.dessert);

// vendredi
remplace("VendrediEntre", menu.vendredi.entre);
remplace("VendrediPlat", menu.vendredi.plat);
remplace("VendrediDessert", menu.vendredi.dessert);



