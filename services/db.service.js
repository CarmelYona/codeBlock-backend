
const MongoClient = require('mongodb').MongoClient

const config = require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = 'ProjCodeBlock_DB'
// const dbName = 'codeBlock'
var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        return collection
    } catch (err) {
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(dbName)
        dbConn = db
        return db
    } catch (err) {
        throw err
    }
}