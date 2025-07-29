import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { GetAllCategoriesService } from '../../services/categories/get-all-categories-service.js';

export async function getAllCategoriesController(_req: FastifyRequest, res: FastifyReply) {
  const repo = new PrismaCategoryRepository();
  const service = new GetAllCategoriesService(repo);

  const result = await service.execute();

  return res.send(result);
}
