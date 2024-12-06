const express = require('express')
const { getCodeBlocks, getCodeBlock, updateCodeBlock, addCodeBlock, removeCoeBlock } = require('./code.controller')
const router = express.Router()

router.get('/', getCodeBlocks)
router.get('/:id', getCodeBlock)
router.put('/:id', updateCodeBlock)
router.post('/add', addCodeBlock)
router.delete('/:id', removeCoeBlock)

module.exports = router