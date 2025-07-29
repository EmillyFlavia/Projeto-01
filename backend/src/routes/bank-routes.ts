import { FastifyInstance } from 'fastify';

import { createBankController } from '../controllers/bank/create-bank-controller.js';
import { getAllBanksController } from '../controllers/bank/get-all-banks-controller.js';
import { getBankByIdController } from '../controllers/bank/get-bank-by-id-controller.js';
import { updateBankController } from '../controllers/bank/update-bank-controller.js';
import { deleteBankController } from '../controllers/bank/delete-bank-controller.js';

export async function bankRoutes(app: FastifyInstance) {
  app.post('/banks', createBankController);
  app.get('/banks', getAllBanksController);
  app.get('/banks/:id', getBankByIdController);
  app.put('/banks/:id', updateBankController);
  app.delete('/banks/:id', deleteBankController);
}
