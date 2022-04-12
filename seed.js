const { db, MaintTicket } = require('./server/db/')

const seed = async() => {
    try {
        await db.sync({force: true })

        await MaintTicket.create({
            title: 'broken kitchen faucet',
            description: 'faucet is broken and leaking under the sink, water is pooling',
            maintNotes: null,
            completed: false,
            timeRequested: Date.now(),
        })
        console.log('synced!')
        db.close()
    } catch (err) {
        console.log(err)
    }
}

seed()
    .then(() => {
        console.log("Seeding success")
        db.close()
    })