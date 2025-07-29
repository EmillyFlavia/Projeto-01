import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaCategoryRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-category-repository.js';
import { UpdateCategoryService } from '../../services/categories/update-category-service.js';

type UpdateCategoryInput = {
  name?: string;
  icon?: string | null;
};

export async function updateCategoryController(
  req: FastifyRequest<{ Params: { id: string }; Body: UpdateCategoryInput }>,
  res: FastifyReply
) {
  const { id } = req.params;
  const data = req.body;

  const repo = new PrismaCategoryRepository();
  const service = new UpdateCategoryService(repo);

  const updated = await service.execute({ id, data });

  return res.send(updated);
}
