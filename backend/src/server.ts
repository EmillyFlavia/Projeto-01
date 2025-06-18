import Fastify from 'fastify';
import transactionsRoutes from './routes/transactions';
import banksRoutes from './routes/banks';
import categoriesRoutes from './routes/categories';

const server = Fastify();

server.register(transactionsRoutes, { prefix: '/transactions' });
server.register(banksRoutes, { prefix: '/banks' });
server.register(categoriesRoutes, { prefix: '/categories' });

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
