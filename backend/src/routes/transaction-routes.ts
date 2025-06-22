import { FastifyInstance } from "fastify";
import { InMemoryTransactionRepository } from '../repositories/in-memory/in-memory-transaction-repository.ts';
import { randomUUID } from "node:crypto";

export async function transactionRoutes(app: FastifyInstance) {
  const transactionRepository = new InMemoryTransactionRepository();

  app.post('/transactions', async (request, reply) => {
    const { title, amount, categoryId, bankId } = request.body as {
      title: string;
      amount: number;
      categoryId: string;
      bankId: string;
    };
    const transaction = { id: randomUUID(), title, amount, categoryId, bankId };
    await transactionRepository.create(transaction);
    return reply.status(201).send(transaction);
  });

  app.get('/transactions', async () => {
    return transactionRepository.findAll();
  });

  app.get('/transactions/:id', async (request) => {
    const { id } = request.params as { id: string };
    return transactionRepository.findById(id);
  });

  app.delete('/transactions/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    await transactionRepository.delete(id);
    return reply.status(204).send();
  });
}
