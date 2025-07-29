import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { UpdateBankService } from '../../services/banks/update-bank-service.js';

// Definimos os campos permitidos para atualização:
type UpdateBankInput = {
  ispb?: string;
  name?: string;
  code?: string;
  fullName?: string;
};

export async function updateBankController(
  req: FastifyRequest<{ Params: { id: string }; Body: UpdateBankInput }>,
  res: FastifyReply
) {
  const { id } = req.params;
  const data = req.body;

  const repo = new PrismaBankRepository();
  const service = new UpdateBankService(repo);

  const updated = await service.execute({ id, data });

  return res.send(updated);
}
