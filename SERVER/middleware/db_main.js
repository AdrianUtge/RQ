const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');



// // Connection URL
const url = 'mongodb+srv://Admin:birsW1sW3IP8nhh8@rq-s-zoen2.mongodb.net/test?retryWrites=true&w=majority';

// // Database Name
const dbName = 'Prof';

// // Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server

function OI(data) {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        addData(data)

        client.close();
    });
}

function addData(data) {


    const db = client.db(dbName);
    db.collection('Presence').insertOne(data, function (err, r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);


    })
};


module.exports = {
    OI: OI,
}


