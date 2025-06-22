import { FastifyInstance } from "fastify";
import { InMemoryCategoryRepository } from '../repositories/in-memory/in-memory-category-repository.ts';
import { randomUUID } from "node:crypto";

export async function categoryRoutes(app: FastifyInstance) {
  const categoryRepository = new InMemoryCategoryRepository();

  app.post('/categories', async (request, reply) => {
    const { name } = request.body as { name: string };
    const category = { id: randomUUID(), name };
    await categoryRepository.create(category);
    return reply.status(201).send(category);
  });

  app.get('/categories', async () => {
    return categoryRepository.findAll();
  });

  app.get('/categories/:id', async (request) => {
    const { id } = request.params as { id: string };
    return categoryRepository.findById(id);
  });

  app.delete('/categories/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    await categoryRepository.delete(id);
    return reply.status(204).send();
  });
}
