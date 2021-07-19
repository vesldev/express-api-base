const getHome = async (req, res, next) => {
    return res.render('index', { title: 'Express API' });
}

module.exports = {
    getHome
}
