const router = require('express').Router();
const guard = require('./guard');

const testRouter = require('./api/test.router');

// test routes require test key to trigger
router.all('/test/*', guard.requiresTestKey);
router.use('/test', testRouter);

module.exports = router;
