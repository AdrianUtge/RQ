var express = require('express');
var router = express.Router();

let meni = require('../controllers/menu')

/* GET home page. */
router.get('/admin/menu', menu_);
function menu_(req, res) {
    res.render('menu')
}

module.exports = router;
