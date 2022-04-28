const router = require('express').Router()
const {authenticateToken} = require('../middleware')

// /api/
router.get('/', authenticateToken, (req, res, next) => {
    res.send('this is the /api/ route and it has cleared the middleware.')
})

module.exports = router