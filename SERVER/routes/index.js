// Main router entry point, sets up all route modules
const express = require('express');
const router = express.Router();

const admin = require('./admin');
const main = require('./main')

router.get('/admin', admin);
router.get('/', main);



module.exports = router;
