document.getElementById("Lundi").addEventListener("click", Lundi);
document.getElementById("Mardi").addEventListener("click", Mardi);
document.getElementById("Jeudi").addEventListener("click", Jeudi);
document.getElementById("Vendredi").addEventListener("click", Vendredi);







function Lundi() {
    let lundientre = document.getElementById("lundi.entre").value
    let lundiplat = document.getElementById("lundi.plat").value
    let lundidessert = document.getElementById("lundi.dessert").value

    const JsonLundientre = JSON.stringify(lundientre)
    const JsonLundiplat = JSON.stringify(lundiplat)
    const JsonLundidessert = JSON.stringify(lundidessert)

    const MenuLundi = [JsonLundientre + JsonLundiplat + JsonLundidessert];


    // post to node server
}


function Mardi() {
    let mardientre = document.getElementById("mardi.entre").value
    let mardiplat = document.getElementById("mardi.plat").value
    let mardidessert = document.getElementById("mardi.dessert").value

    const Jsonmardientre = JSON.stringify(mardientre)
    const Jsonmardiplat = JSON.stringify(mardiplat)
    const Jsonmardidessert = JSON.stringify(mardidessert)

    const Menumardi = [Jsonmardientre + Jsonmardilat + Jsonmardidessert];


    // post to node server
}


function Jeudi() {
    let jeudientre = document.getElementById("jeudi.entre").value
    let jeudiplat = document.getElementById("jeudi.plat").value
    let jeudidessert = document.getElementById("jeudi.dessert").value

    const Jsonjeudientre = JSON.stringify(jeudientre)
    const Jsonjeudiplat = JSON.stringify(jeudiplat)
    const Jsonjeudidessert = JSON.stringify(jeudidessert)

    const Menujeudi = [Jsonjeudientre + Jsonjeudiplat + Jsonjeudidessert];


    // post to node server
}


function Jeudi() {
    let jeudientre = document.getElementById("jeudi.entre").value
    let jeudiplat = document.getElementById("jeudi.plat").value
    let jeudidessert = document.getElementById("jeudi.dessert").value

    const Jsonjeudientre = JSON.stringify(jeudientre)
    const Jsonjeudiplat = JSON.stringify(jeudiplat)
    const Jsonjeudidessert = JSON.stringify(jeudidessert)

    const Menujeudi = [Jsonjeudientre + Jsonjeudiplat + Jsonjeudidessert];


    // post to node server
}


function Vendredi() {
    let vendredientre = document.getElementById("vendredi.entre").value
    let vendrediplat = document.getElementById("vendredi.plat").value
    let vendredidessert = document.getElementById("vendredi.dessert").value

    const Jsonvendredientre = JSON.stringify(vendredientre)
    const Jsonvendrediplat = JSON.stringify(vendrediplat)
    const Jsonvendredidessert = JSON.stringify(vendredidessert)

    const Menuvendredi = [Jsonvendredientre + Jsonvendrediplat + Jsonvendredidessert];


    // post to node server
}