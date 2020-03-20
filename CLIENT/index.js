

// Cantine
// Exemple de menu qui sera plus tard directement fait depuis le panneau d'administartion
conteur = 0;


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


async function GetB() {
    var fromServer = await fetch('http://localhost:3000/get/menu')
        .then(function (response) {
            return response.json()
        })
    console.log(fromServer)

    // Ramplacement des menus
    function remplace(id, data) {
        document.getElementById(id).innerHTML = data;
    }
    console.log(fromServer[0])

    // lundi
    remplace("LundiEntre", fromServer[0].lundientre);
    remplace("LundiPlat", fromServer[0].lundiplat);
    remplace("LundiDessert", fromServer[0].lundidessert);

    // mardi
    remplace("MardiEntre", fromServer[0].mardientre);
    remplace("MardiPlat", fromServer[0].mardiplat);
    remplace("MardiDessert", fromServer[0].mardidessert);

    // jeudi
    remplace("JeudiEntre", fromServer[0].jeudientre);
    remplace("JeudiPlat", fromServer[0].jeudiplat);
    remplace("JeudiDessert", fromServer[0].jeudidessert);

    // vendredi
    remplace("VendrediEntre", fromServer[0].vendredientre);
    remplace("VendrediPlat", fromServer[0].vendrediplat);
    remplace("VendrediDessert", fromServer[0].vendredidessert);



}





GetB()











// Ajout de liste
function AddAbsence(data) {
    var x = document.createElement("LI");
    var t = document.createTextNode(data);
    x.appendChild(t);
    document.getElementById("presence").appendChild(x);
}



// Get depuis Express 

let id = 0
async function GetDB() {
    var fromServer = await fetch('http://localhost:3000/get/presence')
        .then(function (response) {
            return response.json()
        })

    while (id < fromServer.length) {
        let abs = (fromServer[id].Nom);
        console.log(abs)
        AddAbsence(abs);

        id++;
    }

}

GetDB();

