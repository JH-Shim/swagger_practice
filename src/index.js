const express = require('express')
const swaggerUi = require('swagger-ui-express')

const usersRouter = require('./routers/usersRouter')
const apiSpecification = require('./openapi-sample.json')
// ! 위의 apiSpecification은 공식 문서에서 제공하는 샘플입니다.

const app = express()
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

// ! cookie testing. 이 프로젝트와 전혀 관련이 없는 부분입니다.
// const cookieParser = require('cookie-parser')
// app.use(cookieParser())
//
// app.get('/testing', (req, res) => {
//     console.log('headers.cookie: ', req.headers.cookie)
//     console.log('cookies :', req.cookies)
//
//     res.cookie('cookie1', 'success2')
//     res.cookie('cookie2', 'success2')
//     // res.clearCookie('cookie1').clearCookie('cookie2')
//     res.json('OK')
// })
