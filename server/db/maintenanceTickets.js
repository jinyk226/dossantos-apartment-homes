const { Sequelize, DataTypes } = require('sequelize');
const db = require('./database')

const MaintTicket = db.define('maintticket', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    maintNotes: {
        type: Sequelize.STRING(500)
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    timeRequested: {
        type: Sequelize.DATE
    },
    timeCompleted: {
        type: Sequelize.DATE
    }
})

module.exports = MaintTicket