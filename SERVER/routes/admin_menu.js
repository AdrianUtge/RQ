var express = require('express');
var router = express.Router();

let menu = require('../controllers/admin_menu')

/* GET home page. */
router.get('/admin/menu', menu.adminMenu);
router.post('/admin/menu', menu.adminMenu);

module.exports = router;
