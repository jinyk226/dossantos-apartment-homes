const { Sequelize } = require('sequelize');
const db = require('./database')

const RefreshTokens = db.define('refreshtoken', {
    refreshToken: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = RefreshTokens