// Main router entry point, sets up all route modules
const express = require('express');
const router = express.Router();

const admin = require('./admin');
const main = require('./main');
const menu = require('./menu');
const abs = require('./abs')


router.get('/', main);


//Admin Panel
router.get('/admin', admin);
router.get('/admin/menu', menu);
router.get('/admin/abs', abs)


module.exports = router;
