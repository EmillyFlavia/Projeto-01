import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaTransactionRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-transaction-repository.js';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { UpdateTransactionService } from '../../services/transactions/update-transaction-service.js';

export async function updateTransactionController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };
  const { description, type, amount, date, bankId, categoryId } = req.body as any;

  const transactionRepo = new PrismaTransactionRepository();
  const bankRepo = new PrismaBankRepository();
  const categoryRepo = new PrismaCategoryRepository();

  const bank = await bankRepo.findById(bankId);
  const category = await categoryRepo.findById(categoryId);

  if (!bank || !category) {
    return res.status(400).send({ error: 'Invalid bank or category ID' });
  }

  const service = new UpdateTransactionService(transactionRepo);

  const updated = await service.execute({
    id,
    data: {
      description,
      type,
      amount,
      date: new Date(date),
      bank,
      category
    }
  });

  return res.send(updated);
}
