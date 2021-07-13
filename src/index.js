const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const usersRouter = require('./routers/usersRouter')
const swaggerOptions = require('./swaggerOptions')

const app = express()
const apiSpecification = swaggerJsdoc(swaggerOptions)
const PORT = 5000

// ! console.log [Object]
// ! reference: https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
// const util = require('util')
// console.log(util.inspect(apiSpecification, { showHidden: false, depth: null }))

app.use(express.json())

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(apiSpecification, { explorer: true }),
)

app.use('/users', usersRouter)

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`))
