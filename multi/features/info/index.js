const whatDoWeDo = require('./what-do-we-do.route')
const whoAreWeRoute = require('./who-are-we.route')

const infoFeature =  {
    name: 'info',
    hook: '$FASTIFY_ROUTE',
    handler: [{
        method: 'GET',
        url: '/who',
        handler: whoAreWeRoute
    }, {
        method: 'GET',
        url: '/what',
        handler: whatDoWeDo
    }]
}

module.exports = infoFeature