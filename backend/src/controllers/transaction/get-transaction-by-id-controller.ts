import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaTransactionRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-transaction-repository.js';
import { GetTransactionByIdService } from '../../services/transactions/get-transaction-by-id-service.js';

export async function getTransactionByIdController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };

  const repo = new PrismaTransactionRepository();
  const service = new GetTransactionByIdService(repo);

  const transaction = await service.execute(id);

  return transaction
    ? res.send(transaction)
    : res.status(404).send({ error: 'Transaction not found' });
}
