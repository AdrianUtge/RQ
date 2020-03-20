const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const fs = require('fs-extra')


// // Connection URL
const url = 'mongodb+srv://Admin:birsW1sW3IP8nhh8@rq-s-zoen2.mongodb.net/test?retryWrites=true&w=majority';

// // Database Name
const dbName = 'Prof';

// // Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server



function OI(data) {


    const db = client.db(dbName);
    db.collection('Presence').insertOne(data, function (err, r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);


    })
};

function addData(data) {

    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        OI(data)

        readDataP()
        readDataM()

        client.close();
    });
}
// function OL() {
//     const db = client.db(dbName);
//     db.collection('Presence').find({}, { projection: { _id: 0, Presence: 1, Prenom: 1 } }).toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         return result;
//         module.exports.result = result;
//     })
// }

// function readData() {
//     client.connect(function (err) {
//         assert.equal(null, err);
//         console.log("Connected successfully to server");
//         const db = client.db(dbName);

//         OL()

//         client.close();
//     })
// }






function readDataP() {
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        const db = client.db(dbName);
        db.collection('Presence').find({}, { projection: { _id: 0, Presence: 1, Nom: 1 } }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            fs.writeJson('./P.json', result);

        })

    })
}




function readDataM() {
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        const db = client.db(dbName);
        db.collection('Menu').find({}, { projection: { _id: 0, } }).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            fs.writeJson('./M.json', result, err => {
                if (err) return console.error(err)

                console.log('success!')
            })
        })

    })
}




module.exports = {
    addData: addData,
    readDataP: readDataP,
    readDataM: readDataM,


}


