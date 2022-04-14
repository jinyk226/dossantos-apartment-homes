let router = require('express').Router()
const bcrypt = require('bcrypt')
const {User} = require('../db')

// /me/signup
router.post('/signup', async (req, res, next) => {
    try {
        const {firstName, lastName, email, password} = req.body

        const found = await User.findOne({where: {email}})
        if (found) res.status(400).send("User already exists!")
        else {
            const hashPass = await bcrypt.hash(password, 5);
            const user = await User.create({ email, password: hashPass, firstName, lastName})
            res.status(201).send(user)
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;