const db = require('./database')
const User = require('./users')
const Renter = require('./renters')
const Admin = require('./admins')

//this is where we will set our associations
User.hasOne(Renter)
Renter.belongsTo(User)

User.hasOne(Admin)
Admin.belongsTo(User)

module.exports = {
    db,
    User,
    Renter,
    Admin
}