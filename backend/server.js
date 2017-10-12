'use strict'

const fastify = require('fastify')()
const cors = require('cors')

fastify.use(cors())

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string',
          },
        },
      },
    },
  },
}

fastify.get('/', schema, function (req, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen(3001, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
