const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

module.exports = {
    query,
    getByUsername
}

async function query() {
    const criteria = {}
    try {
        const collection = await dbService.getCollection('user')
        var users = await collection.find(criteria).toArray()
        users = users.map(user => {
            delete user.password
            return user
        })
        return users
    } catch (err) {
        logger.error('***********cannot find users', err)
        throw err
    }
}

async function getByUsername(username, password) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        if (user.password != password) return null
        return user
    } catch (err) {
        logger.error(`while finding user ${username}`, err)
        throw err
    }
}