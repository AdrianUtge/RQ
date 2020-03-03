var express = require('express');
var router = express.Router();

//let admin = require('../controllers/admin')

/* GET home page. */
router.get('/admin', admin_);
function admin_(req, res) {
    console.log(req)
    res.send("ok")
}

module.exports = router;
