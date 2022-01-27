const multiplyRoute = (request, reply) => {
    console.log(request.body.input.num1)

    if (request.body.input.num1 === 5) {
        reply.status(416).send({
            message: 'No nos gustan los cincos',
            extensions: {
                path: "$.input.num1",
                code: 123
            }
        })
    }

    const result = request.body.input.num1 * request.body.input.num2;

    reply.send({
        result
    })
}

module.exports = multiplyRoute