module.exports = function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true")
    // res.header("Access-Control-Allow-Origin", "*")

    next()
}
