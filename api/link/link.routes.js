const express = require('express')
const { getLink, createLink, deleteLink } = require('./link.controller')
const router = express.Router()

router.get('/', getLink )
router.post('/add', createLink )
router.delete('/:id', deleteLink )

module.exports = router