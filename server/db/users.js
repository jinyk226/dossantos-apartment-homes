const { Sequelize } = require('sequelize');
const db = require('./database')

const User = db.define('user', {
  // Model attributes are defined here
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
          notEmpty: true
      }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
      }
    },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
    }
  },
  phoneNumber: {
      type: Sequelize.STRING,
  }
})

module.exports = User