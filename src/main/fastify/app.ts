import fastifyInit, { RouteShorthandOptions } from 'fastify';
import { routes } from '../routes';

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
      },
    },
  },
};

const fastify = fastifyInit({ logger: false });

fastify.post(routes.route, async (request, reply) => {
  const body = request.body;
  const res = await routes.action().execute(body as any);
  return reply.status(201).send(res);
});
export const app = {
  listen(port: number, callback: () => void) {
    (async () => {
      try {
        await fastify.listen({ port });
        callback();
      } catch (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    })();
  },
};
