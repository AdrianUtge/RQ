// Main router entry point, sets up all route modules
const express = require('express');
const router = express.Router();

const admin = require('./admin');
const main = require('./main');
const menu = require('./menu');

router.get('/admin', admin);

router.get('/', main);

router.get('/admin/menu', menu);



module.exports = router;
