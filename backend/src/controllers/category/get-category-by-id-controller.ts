import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { GetCategoryByIdService } from '../../services/categories/get-category-by-id-service.js';

export async function getCategoryByIdController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };

  const repo = new PrismaCategoryRepository();
  const getById = new GetCategoryByIdService(repo);

  const category = await getById.execute(id);

  return category ? res.send(category) : res.status(404).send({ error: 'Category not found' });
}
