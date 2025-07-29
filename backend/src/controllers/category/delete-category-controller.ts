import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { DeleteCategoryService } from '../../services/categories/delete-category-service.js';

export async function deleteCategoryController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };

  const repo = new PrismaCategoryRepository();
  const service = new DeleteCategoryService(repo);

  await service.execute(id);

  return res.status(204).send();
}
