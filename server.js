const { db } = require('./server/db/')
const app = require('./server/')
const PORT = 8000

db.sync({force: true})
    .then(() => {
        console.log('db synced')
        app.listen(PORT, () => console.log(`Serving on port ${PORT}`))

    })
