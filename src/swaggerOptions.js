module.exports = {
    swaggerDefinition: {
        // 아래의 각 속성에 대한 설명은 다음의 url에서 확인가능하다.
        // https://swagger.io/docs/specification/basic-structure/
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
