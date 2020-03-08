
var express = require('express');
var router = express.Router();
const AddData = require('../db/db_main')

router.get('/admin/menu', menu);
function menu(req, res) {
    res.render('menu')
}
