const express = require('express')

const usersController = require('../controllers/usersController')

const usersRouter = express.Router()

usersRouter.get('/', usersController.indexGet)
usersRouter.post('/', usersController.indexPost)

module.exports = usersRouter
