import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaTransactionRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-transaction-repository.js';
import { GetAllTransactionsService } from '../../services/transactions/get-all-transactions-service.js';

export async function getAllTransactionsController(_req: FastifyRequest, res: FastifyReply) {
  const repo = new PrismaTransactionRepository();
  const service = new GetAllTransactionsService(repo);

  const transactions = await service.execute();

  return res.send(transactions);
}
