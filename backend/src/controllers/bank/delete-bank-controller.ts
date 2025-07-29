import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { DeleteBankService } from '../../services/banks/delete-bank-service.js';

export async function deleteBankController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };

  const repo = new PrismaBankRepository();
  const del = new DeleteBankService(repo);

  await del.execute(id);

  return res.status(204).send();
}
