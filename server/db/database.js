const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const dbName = pkg.name

const db = new Sequelize(dbName, 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

module.exports = db