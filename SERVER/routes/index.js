var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing')
let menu = require('../controllers/admin_menu')

router.get('/', landing.get_landing);
router.post('/', landing.submit_lead)


module.exports = router;


