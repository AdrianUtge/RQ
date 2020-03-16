let LIST = []

let id = 0;

function Confirmer() {
    var x = document.getElementById("inputAbs").value;
    // document.getElementById("demo").innerHTML = x;
    console.log(x)
    AddAbsence(x)
    save(x)
    inputAbs.value = "";

}


function save(data) {

    let C = JSON.stringify(data);
    console.log(C);
    LIST.push({
        name: C,
        id: id,
        presence: 'false'
    });
    id++
    console.log(LIST)

}



function AddAbsence(data) {
    var x = document.createElement("LI");
    var t = document.createTextNode(data);
    x.appendChild(t);
    document.getElementById("abs").appendChild(x);
}

