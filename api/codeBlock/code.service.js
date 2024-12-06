const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    update,
    add,
    remove
}

const collectionName = 'codeBlock'

async function query() {
    const criteria = {}
    try {
        const collection = await dbService.getCollection(collectionName)
        const codeBlocks = await collection.find(criteria).toArray()
        return codeBlocks
    } catch (err) {
        logger.error('***********cannot find codes', err)
        throw err
    }
}

async function getById(codeBlockId) {
    try {
        const collection = await dbService.getCollection(collectionName)
        const codeBlock = collection.findOne({ _id: ObjectId(codeBlockId) })
        return codeBlock
    } catch (err) {
        logger.error('***********cannot find codeBlock', err)
        throw err
    }
}

async function update(codeBlock) {
    try {
        var id = ObjectId(codeBlock._id)
        delete codeBlock._id
        const collection = await dbService.getCollection(collectionName)
        await collection.updateOne({ _id: id }, { $set: { ...codeBlock } })
        return codeBlock
    } catch (err) {
        logger.error(`cannot update codeBlock ${boardId}`, err)
        throw err
    }
}

async function add(codeBlock) {
    try {
        const collection = await dbService.getCollection(collectionName)
        const code = await collection.insertOne(codeBlock)
        return code.ops[0]._id ? true : false
    } catch (err) {
        logger.error(`cannot add codeBlock`, err)
        throw err
    }
}

async function remove(id) {
    try {
        const collection = await dbService.getCollection(collectionName)
        await collection.deleteOne({ _id: ObjectId(id) })
    } catch (err) {
        logger.error(`cannot remove codeBlock`, err)
    }
}