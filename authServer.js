const { db } = require('./server/db/')
const { authApp } = require('./server/')
const PORT = 8001

db.sync()
    .then(() => {
        console.log('db synced')
        authApp.listen(PORT, () => console.log(`Serving on port ${PORT}`))
    })
