const db = require('../middleware/db_main')
const express = require('express')
const router = express.Router();
const fs = require('fs-extra')

var bodyParser = require('body-parser')


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })







router.use(bodyParser.json())


// router.get('/presence', (req, res, next) => res.json(data).end());


router.get('/presence', function (req, res) {
    db.readDataP()

    const data = fs.readJSONSync('./P.json')

    console.log('i receive a GET request');

    var tryFetch = data;

    res.json(tryFetch)
})


router.get('/menu', function (req, res) {
    db.readDataM()

    const data = fs.readJSONSync('./M.json')

    console.log('i receive a GET request');

    var tryFetch = data;

    res.json(tryFetch)
})



module.exports = router;









