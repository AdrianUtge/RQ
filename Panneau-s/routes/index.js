var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing.js')
/* GET home page. */
router.get('/', landing.get_landing);

module.exports = router;