var express = require('express');
var router = express.Router();

let main = require('../controllers/main')
/* GET home page. */
router.get('/', main_);
function main_(req, res) {
    res.render('main', { data: "obj" })
}

module.exports = router;
