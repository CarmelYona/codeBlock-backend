const codeBlockService = require('./code.service')
const logger = require('../../services/logger.service')

async function getCodeBlocks(req, res) {

    try {
        const codeBlocks = await codeBlockService.query()
        res.send(codeBlocks)
    } catch (err) {
        logger.error('Failed to get code block', err)
        res.status(500).send({ err: 'Failed to get code block' })
    }
}

async function getCodeBlock(req, res) {

    try {
        const codeBlock = await codeBlockService.getById(req.params.id)
        res.send(codeBlock)
    } catch (err) {
        logger.error('Failed to get code block', err)
        res.status(500).send({ err: 'Failed to get code block' })
    }
}

async function updateCodeBlock(req, res) {

    try {
        const codeBlock = req.body
        const updatedCodeBlock = await codeBlockService.update(codeBlock)
        res.json(updatedCodeBlock)
    } catch (err) {
        logger.error('Failed to update code block', err)
        res.status(500).send({ err: 'Failed to update code block' })
    }
}

async function addCodeBlock(req, res) {

    try {
        const codeBlock = req.body
        const isAdded = await codeBlockService.add(codeBlock)
        res.json(isAdded)
    } catch (err) {
        logger.error('Failed to update code block', err)
        res.status(500).send({ err: 'Failed to update code block' })
    }
}

async function removeCoeBlock(req, res) {
    try {
        await codeBlockService.remove(req.params.id)
    } catch (error) {
        logger.error('Faild to remove code block', error)
    }
}

module.exports = {
    getCodeBlocks,
    getCodeBlock,
    updateCodeBlock,
    addCodeBlock,
    removeCoeBlock
}