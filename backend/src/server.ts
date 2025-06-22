import Fastify from "fastify";
import { bankRoutes } from './routes/bank-routes.ts';
import { categoryRoutes } from './routes/category-routes.ts';
import { transactionRoutes } from './routes/transaction-routes.ts';

const app = Fastify();

app.register(bankRoutes);
app.register(categoryRoutes);
app.register(transactionRoutes);

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP Server Running!');
});
