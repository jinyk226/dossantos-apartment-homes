require('dotenv').config()

let router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, RefreshToken} = require('../db')

// /auth/signup
router.post('/signup', async (req, res, next) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        const found = await User.findOne({where: {email}})
        if (found) res.status(400).send("User already exists!")
        else {
            const hashPass = await bcrypt.hash(password, 10);
            const user = await User.create({ email, password: hashPass, firstName, lastName})
            res.status(201).send(user)
        }
    } catch (err) {
        console.log(err)
    }
})

// /auth/login
router.post('/login', async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({where: {email}})
        if (user) {
            if(bcrypt.compare(password, user.password)) {
                const accessToken = jwt.sign({email: user.email, password: user.password}, process.env.JWT_SECRET_KEY, {expiresIn: "30 min"})
                const refreshToken = jwt.sign({email: user.email, password: user.password}, process.env.JWT_REFRESH_SECRET_KEY)
                await RefreshToken.create({refreshToken})
                res.send({accessToken, refreshToken})
            } else {
                res.status(401).send("Incorrect password, please try again")
            }
        } else {
            res.status(400).send("Unable to find this user. Click 'sign up' to create an account!")
        }
    } catch (err) {
        console.log(err)
    }
})

// /auth/refresh
router.post('/refresh', async (req, res, next) => {
    const { refreshToken } = req.body
    if (refreshToken == null) return res.sendStatus(401)
    // attempt to find refresh token in database. If not found, send status 403
    const dbRefreshToken = RefreshToken.findOne({where: {refreshtoken: refreshToken}})
    if (!dbRefreshToken) res.sendStatus(403)
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = jwt.sign({ email: user.email, password: user.password}, process.env.JWT_SECRET_KEY, {expiresIn: "30 min"})
        res.send(accessToken)
    })
})

// /auth/logout

module.exports = router;