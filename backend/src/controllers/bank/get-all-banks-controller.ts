import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { GetAllBanksService } from '../../services/banks/get-all-banks-service.js';

export async function getAllBanksController(_req: FastifyRequest, res: FastifyReply) {
  const repo = new PrismaBankRepository();
  const service = new GetAllBanksService(repo);

  const list = await service.execute();

  return res.send(list);
}
