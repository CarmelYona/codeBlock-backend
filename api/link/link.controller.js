const linkService = require('./link.service')
const logger = require('../../services/logger.service')

async function getLink(req, res) {
    try {
        const link = await linkService.query()
        res.send(link)
    } catch (err) {
        logger.error('Failed to get link', err)
        res.status(500).send({ err: 'Failed to get link' })
    }
}

async function deleteLink(req, res) {
    try {
        const link = await linkService.remove(req.params.id)
        res.send(link)
    } catch (err) {
        logger.error('Failed to get link', err)
        res.status(500).send({ err: 'Failed to get link' })
    }
}

async function createLink(req, res) {
    var newLink  = req.body
    try {
        const link = await linkService.add(newLink)
        res.send(link)
    } catch (err) {
        logger.error('Failed to get link', err)
        res.status(500).send({ err: 'Failed to get link' })
    }
}

module.exports = {
    getLink,
    deleteLink,
    createLink
}