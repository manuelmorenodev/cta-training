const { runHookApp } = require("@forrestjs/hooks");
const envalid = require('envalid');
const fastify = require("@forrestjs/service-fastify");
const apollo = require("@forrestjs/service-apollo");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

const homePage = require('./features/home-page');
const infoFeature = require('./features/info');
const multiplyFeature = require('./features/multiply');

const validatedEnv = envalid.cleanEnv(process.env, {
    NODE_ENV: envalid.str({
        choices: ['development', 'production']
    }),
    FASTIFY_PORT: envalid.num({
        desc: 'Local port where to run Fastify',
        default: 4000
    }),
    HASURA_ENDPOINT: envalid.str({
        desc: 'Full url to a GraphQL API'
    })
})

console.log(validatedEnv);

runHookApp({
    trace: "compact",
    settings: {
        fastify: {
            port: validatedEnv.FASTIFY_PORT
        },
        apollo: {
            client: {
                config: {
                    uri: validatedEnv.HASURA_ENDPOINT
                }
            }
        }
    },
    services: [
        apollo,
        fastify,
        fastifyHealthz
    ],
    features: [
        homePage,
        infoFeature,
        multiplyFeature
    ]
}).catch(console.error);