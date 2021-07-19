const settings = require('../config/settings');

function requiresTestKey(req, res, next) {
    const key = req.query.key;

    // check a test key has been set and it matches
    if (settings.TEST_KEY && settings.TEST_KEY === key) {
        next();
    } else {
        res.status(403).send('Unauthorized');
    }
}

module.exports = {
    requiresTestKey
};