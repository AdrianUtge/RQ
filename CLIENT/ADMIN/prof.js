let LIST = []

let id = 0;






function AddAbsence(data) {
    var x = document.createElement("LI");
    var t = document.createTextNode(data);
    x.appendChild(t);
    document.getElementById("abs").appendChild(x);
}

let id2 = 0;

function CB(data) {
    id2++;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id2;
    checkbox.name = 'interest';
    checkbox.value = 'cb';

    var label = document.createElement('label')
    label.htmlFor = 'cb';
    label.appendChild(document.createTextNode(data));

    var br = document.createElement('br');

    var container = document.getElementById('container');
    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(br);
    document.getElementById(id2).checked = true;
    return id2


}



function CheckTester(type, id) {
    if (document.getElementById(id).checked = type) {
        console.log(type + "true")
    }
}



async function GetB() {
    var fromServer = await fetch('http://localhost:3000/get/presence')
        .then(function (response) {
            return response.json()
        })
    console.log(fromServer)


    while (id < fromServer.length) {
        let abs = (fromServer[id].data.Nom);
        console.log(abs)
        id++;
        CB(abs)

    }
}


GetB()

