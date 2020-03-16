var express = require('express');
var router = express.Router();

let abs = require('../controllers/abs')
/* GET home page. */
router.get('/admin/abs', abs_);
function abs_(req, res) {
    res.render('abs')
}

router.get('/admin/prof.js', absjs);
function absjs(req, res) {

}

module.exports = router;

