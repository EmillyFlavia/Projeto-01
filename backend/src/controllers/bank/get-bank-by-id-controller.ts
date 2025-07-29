import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { GetBankByIdService } from '../../services/banks/get-bank-by-id-service.js';

export async function getBankByIdController(req: FastifyRequest, res: FastifyReply) {
  const { id } = req.params as { id: string };

  const repo = new PrismaBankRepository();
  const get = new GetBankByIdService(repo);

  const bank = await get.execute(id);

  return bank ? res.send(bank) : res.status(404).send({ error: 'Bank not found' });
}
