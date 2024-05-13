import Fastify from 'fastify'
import path from 'node:path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
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
import { htmlSend } from './lib/RenderUtil'
import TopRender from './pages/App';
//
fastify.get('/*', async (req, reply) => {
  reply.type('text/html');
  const rendered = await TopRender()
  reply.send(htmlSend(rendered.html));
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    console.log("#start_posrt:3000");
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();
