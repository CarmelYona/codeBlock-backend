const express = require('express')
const { getCodeBlocks, getCodeBlock, updateCodeBlock } = require('./code.controller')
const router = express.Router()

router.get('/', getCodeBlocks)
router.get('/:id', getCodeBlock)
router.put('/:id', updateCodeBlock)

module.exports = router