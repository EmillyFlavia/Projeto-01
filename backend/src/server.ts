import fastify from 'fastify';

import { bankRoutes } from './routes/bank-routes.js';
import { categoryRoutes } from './routes/category-routes.js';
import { transactionRoutes } from './routes/transaction-routes.js';

const app = fastify();

app.register(bankRoutes);
app.register(categoryRoutes);
app.register(transactionRoutes);

app.listen({ port: 3333 }, () => {
  console.log('🚀 Server is running at http://localhost:3333');
});
