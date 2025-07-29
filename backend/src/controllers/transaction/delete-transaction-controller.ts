import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaTransactionRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-transaction-repository.js';
import { DeleteTransactionService } from '../../services/transactions/delete-transaction-service.js';

export async function deleteTransactionController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };

  const repo = new PrismaTransactionRepository();
  const service = new DeleteTransactionService(repo);

  await service.execute(id);

  return res.status(204).send();
}
