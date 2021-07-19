const router = require('express').Router();
const { asyncHandler } = require('../lib/async');

var webController = require('../controllers/web.controller');

router.get('/', asyncHandler(webController.getHome));

module.exports = router;
