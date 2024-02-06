import Fastify from 'fastify'
import path from 'node:path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
import { renderToString } from 'react-dom/server';
//
const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
if(process.env.NODE_ENV === 'develop'){
  __dirname = __dirname.replace("/src", '');
}else{
  __dirname = __dirname.replace("/dist", '');
}
console.log("ENV.value=", process.env.NODE_ENV);
console.log("__dirname=", __dirname);
//
const fastify = Fastify({
  logger: true
})
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public/static/'),
  prefix: '/public/static/', // optional: default '/'
});

// pages-SSR
import Top from './pages/App';
//
fastify.get('/test', (req, reply) => {
  reply.type('text/html');
  reply.send(renderToString(Top()));
});
//
fastify.get('/', async (req, reply) => {
//  return { hello: 'world' }
  reply.type('text/html');
  reply.send(renderToString(Top()));
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
