const db = require('./database')
const User = require('./users')
const Renter = require('./renters')
const Admin = require('./admins')
const Apartment = require('./apartments')
const MaintTicket = require('./maintenanceTickets')
const RefreshToken = require('./refreshTokens')

//this is where we will set our associations
User.hasOne(Renter)
Renter.belongsTo(User)

User.hasOne(Admin)
Admin.belongsTo(User)

MaintTicket.hasOne(Renter)
Renter.belongsTo(MaintTicket)

module.exports = {
    db,
    User,
    Renter,
    Admin,
    Apartment,
    MaintTicket,
    RefreshToken
}