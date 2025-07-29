import { FastifyInstance } from 'fastify';

import { createTransactionController } from '../controllers/transaction/create-transaction-controller.js';
import { getAllTransactionsController } from '../controllers/transaction/get-all-transactions-controller.js';
import { getTransactionByIdController } from '../controllers/transaction/get-transaction-by-id-controller.js';
import { updateTransactionController } from '../controllers/transaction/update-transaction-controller.js';
import { deleteTransactionController } from '../controllers/transaction/delete-transaction-controller.js';

export async function transactionRoutes(app: FastifyInstance) {
  app.post('/transactions', createTransactionController);
  app.get('/transactions', getAllTransactionsController);
  app.get('/transactions/:id', getTransactionByIdController);
  app.put('/transactions/:id', updateTransactionController);
  app.delete('/transactions/:id', deleteTransactionController);
}
