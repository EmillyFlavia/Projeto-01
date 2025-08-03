import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaTransactionRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-transaction-repository.js';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { CreateTransactionService } from '../../services/transactions/create-transaction-service.js';

export async function createTransactionController(req: FastifyRequest, res: FastifyReply) {
  const {
    description,
    amount,
    type,
    categoryId,
    bankId,
  } = req.body as {
    description: string;
    amount: number;
    type: 'income' | 'expense';
    categoryId: string;
    bankId: string;
  };

  const categoryRepo = new PrismaCategoryRepository();
  const bankRepo = new PrismaBankRepository();
  const transactionRepo = new PrismaTransactionRepository();

  const category = await categoryRepo.findById(categoryId);
  const bank = await bankRepo.findById(bankId);

  if (!category || !bank) {
    return res.status(400).send({ error: 'Invalid category or bank ID' });
  }

  const service = new CreateTransactionService(transactionRepo);

  const transaction = await service.execute({
    description,
    type,
    amount,
    category,
    bank
  });

  return res.status(201).send(transaction);
}
