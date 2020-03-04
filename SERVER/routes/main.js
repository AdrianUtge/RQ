var express = require('express');
var router = express.Router();

let admin = require('../controllers/main')

/* GET home page. */
router.get('/', admin_);
function admin_(req, res) {
    res.send("oks")
}

module.exports = router;
