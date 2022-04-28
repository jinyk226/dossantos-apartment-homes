const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] // Bearer TOKEN
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).send("Unable to authenticate user")

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
    })
    next()
}

module.exports = {
    authenticateToken
}