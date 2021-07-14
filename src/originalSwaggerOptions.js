module.exports = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger with Express',
            version: '1.0.0',
            description: 'practice Swagger with JH-Shim',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: ['./src/models/*.js', './src/routers/*.js'],
}

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *           description: Email for the user, needs to be unique
 *       example:
 *         name: milan
 *         email: milan@email.com
 */

/**
 * @swagger
 * tags:
 *   name: users
 *   description: http://localhost:5000/users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: read all Users
 *     tags: # [users]
 *     - users
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/User'
 */

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
