const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
//router index luon cuoi cung
router.use('/', siteController.index);
module.exports = router;