import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { CreateCategoryService } from '../../services/categories/create-category-service.js';

export async function createCategoryController(req: FastifyRequest, res: FastifyReply) {
  const { name, icon } = req.body as { name: string; icon?: string | null };

  const repo = new PrismaCategoryRepository();
  const create = new CreateCategoryService(repo);

  const category = await create.execute({ name, icon });

  return res.status(201).send(category);
}
