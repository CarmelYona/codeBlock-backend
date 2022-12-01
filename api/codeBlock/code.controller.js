const codeBlockService = require('./code.service')
const logger = require('../../services/logger.service')

async function getCodeBlocks(req, res) {

    try {
        const codeBlocks = await codeBlockService.query()
        res.send(codeBlocks)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function getCodeBlock(req, res) {

    try {
        const codeBlock = await codeBlockService.getById(req.params.id)
        res.send(codeBlock)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function updateCodeBlock(req, res) {
    
    try {
        const codeBlock = req.body
        const updatedCodeBlock = await codeBlockService.update(codeBlock)
        res.json(updatedCodeBlock)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(500).send({ err: 'Failed to update board' })
    }
}

module.exports = {
   getCodeBlocks,
   getCodeBlock,
   updateCodeBlock
}