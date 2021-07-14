const express = require('express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const usersRouter = require('./routers/usersRouter')
const apiSpecification = YAML.load('./src/openapi-sample.yaml') // 루트 디렉토리를 기준으로 상대경로

const app = express()
const PORT = 5000

app.use(express.json())

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(apiSpecification, { explorer: true }),
)

app.use('/users', usersRouter)

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`))
