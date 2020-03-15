var express = require('express');
var router = express.Router();

let meni = require('../controllers/menu')

/* GET home page. */
router.get('/admin/menu', menu_);
function menu_(req, res) {
    res.render('menu')
}
router.post('/admin/menu', menuL)
function menuL(req, res) {
    res.redirect('/admin/menu');
}


module.exports = router;
