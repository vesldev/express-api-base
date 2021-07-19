const router = require('express').Router();

const webRouter = require('./web');
const apiRouter = require('./api');

// setup routes
router.use('/api', apiRouter);
router.use('/', webRouter);

module.exports = router;
