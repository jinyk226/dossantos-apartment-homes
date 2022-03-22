const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// const dbName = pkg.name
const dbName = 'dossantos'

const db = new Sequelize(dbName, 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db