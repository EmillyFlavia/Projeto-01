import { FastifyInstance } from "fastify";
import { InMemoryBankRepository } from '../repositories/in-memory/in-memory-bank-repository.ts';
import { randomUUID } from "node:crypto";

export async function bankRoutes(app: FastifyInstance) {
  const bankRepository = new InMemoryBankRepository();

  app.post('/banks', async (request, reply) => {
    const { name } = request.body as { name: string };
    const bank = { id: randomUUID(), name };
    await bankRepository.create(bank);
    return reply.status(201).send(bank);
  });

  app.get('/banks', async () => {
    return bankRepository.findAll();
  });

  app.get('/banks/:id', async (request) => {
    const { id } = request.params as { id: string };
    return bankRepository.findById(id);
  });

  app.delete('/banks/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    await bankRepository.delete(id);
    return reply.status(204).send();
  });
}
