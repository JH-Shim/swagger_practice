const express = require('express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const usersRouter = require('./routers/usersRouter')
const apiSpecification = YAML.load('./src/openapi-sample.yaml') // 루트 디렉토리를 기준으로 상대경로를 적는다.
// ! 위의 apiSpecification은 공식 문서에서 제공하는 샘플입니다. 아래의 apiSpecification은 해당 프로젝트의 것입니다.
// const apiSpecification = YAML.load('./src/originalApiSpecification.yaml')

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
