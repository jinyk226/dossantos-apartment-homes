const router = require('express').Router()

// /api/
router.get('/', (req, res, next) => {
    res.send('this is the /api/ route')
})

module.exports = router