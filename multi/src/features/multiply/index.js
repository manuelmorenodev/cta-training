const multiplyRoute = require('./multiply.route')
const multiplySchema = require('./multiply.schema')

const multiplyFeature = {
    name: 'multiply',
    hook: '$FASTIFY_ROUTE',
    handler: {
        method: 'POST',
        url: '/multi',
        schema: multiplySchema,
        handler: multiplyRoute
    }
}

module.exports = multiplyFeature