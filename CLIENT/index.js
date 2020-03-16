//Importation des libraires 


// Cantine
// Exemple de menu qui sera plus tard directement fait depuis le panneau d'administartion
conteur = 0;
let menu =
{
    "lundi": { "entre": "Fromage", "plat": "Vichysoise", "dessert": "Mousse au chocolat", },
    "mardi": { "entre": "Salade", "plat": "Fondue", "dessert": "Gateau au chocolat", },
    "jeudi": { "entre": "Pate de campage", "plat": "Quiche lorraine", "dessert": "mousse au chocolat", },
    "vendredi": { "entre": "Taboule", "plat": "Steak tartare", "dessert": "mousse au chocolat", },
}
// Profs Abs

let presence =

    [
        { "name": "A.Utge", "presence": false, },
        { "name": "C.Utge", "presence": true, },
        { "name": "S.Utge", "presence": true },
        { "name": "M.Zizi", "presence": false },

    ]


// var dateWithouthSecond = new Date();
// dateWithouthSecond.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

// document.getElementById("heure").innerHTML = dateWithouthSecond.toLocaleTimeString(dateWithouthSecond);

fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris,France&units=metric&appid=6ceafa85f3d1d143c3b210ba885bfbe9')
    .then(res => res.json())
    .then(json => document.getElementById("meteo").innerHTML = json.main.temp);




function doDate() {
    var str = "";

    var days = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samdi");
    var months = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    var now = new Date();

    str += days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);

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




// Ajout de liste
function AddAbsence(data) {
    var x = document.createElement("LI");
    var t = document.createTextNode(data);
    x.appendChild(t);
    document.getElementById("presence").appendChild(x);
}



const arr = [{
    name: 'AD',
    presence: 'false',
},
{
    name: 'AR',
    presence: 'true',
},
];


const items = arr.filter(item => item.presence.indexOf('false') !== -1);


let id = 0

while (id < items.length) {
    let abs = (items[id].name);
    AddAbsence(abs);
    console.log(abs)
    id++;
}



// const arr = [{
//     name: 'string 1',
//     arrayWithvalue: '1,2',
//     other: 'that',
// },
// {
//     name: 'string 2',
//     arrayWithvalue: '2',
//     other: 'that',
// },
// {
//     name: 'string 2',
//     arrayWithvalue: '2,3',
//     other: 'that',
// },
// {
//     name: 'string 2',
//     arrayWithvalue: '4,5',
//     other: 'that',
// },
// {
//     name: 'string 2',
//     arrayWithvalue: '4',
//     other: 'that',
// },
// ];

// const items = arr.filter(item => item.arrayWithvalue.indexOf('4') !== -1);

// console.log(items);
