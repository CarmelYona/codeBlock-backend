const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    add,
    remove
}

const linkId = ObjectId('6384d80e2975fc4a913c8728')
async function query() {
    const criteria = {}
    try {
        const collection = await dbService.getCollection('link')
        const link = await collection.find(criteria).toArray()
        return link[0]
    } catch (err) {
        logger.error('***********cannot find link', err)
        throw err
    }
}

async function remove(linkId) {
    try {
        const collection = await dbService.getCollection('link')
        await collection.deleteOne({ _id: ObjectId(linkId) })
    } catch (err) {
        logger.error('***********cannot delete link', err)
        throw err
    }
}

async function add(link) {
    try {
        const prevLink = await query()
        if(prevLink) await remove(prevLink._id)
        const collection = await dbService.getCollection('link')
        await collection.insertOne(link)
        return link
    } catch (err) {
        logger.error('***********cannot create link', err)
        throw err
    }
}