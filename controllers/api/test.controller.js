const postEnv = async (req, res, next) => {
    return res.json({
        env: req.app.get('env')
    });
}

const postError = async (req, res, next) => {
    process.nextTick(function () {
        throw new Error('test error');
    });
}

const postErrorLog = async (req, res, next) => {
    console.error('test errorlog')
    return res.json({
        messsage: "test errorlog"
    });
}

module.exports = {
    postEnv,
    postError,
    postErrorLog
}
