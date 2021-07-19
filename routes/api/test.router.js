const router = require('express').Router();
const { asyncHandler } = require('../../lib/async');

const testController = require('../../controllers/api/test.controller');

router.post('/env', asyncHandler(testController.postEnv));
router.post('/error', asyncHandler(testController.postError));
router.post('/errorlog', asyncHandler(testController.postErrorLog));

module.exports = router;
