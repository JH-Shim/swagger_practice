const express = require('express')

const usersController = require('../controllers/usersController')

/**
 * @swagger
 * tags:
 *   name: users
 *   description: http://localhost:5000/users
 */
const usersRouter = express.Router()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: read all Users
 *     tags: [users]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */
usersRouter.get('/', usersController.indexGet)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: create a User
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/User'
 *     responses:
 *       "201":
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */
usersRouter.post('/', usersController.indexPost)

module.exports = usersRouter
