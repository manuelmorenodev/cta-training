const homePageRoute = require('./home-page.route')

const homePageFeature = ({ registerAction }) => {
    console.log('Hello world');

    registerAction({
        hook: '$FASTIFY_GET',
        handler: () => {
            console.log('building home page...');

            return {
                url: '/',
                handler: homePageRoute
            }
        }
    });
};

module.exports = homePageFeature;