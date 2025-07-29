import { FastifyReply, FastifyRequest } from 'fastify';
import { PrismaBankRepository } from '../../repositories/in-memory-prisma/in-memory-prisma-bank-repository.js';
import { CreateBankService } from '../../services/banks/create-bank-service.js';

export async function createBankController(req: FastifyRequest, res: FastifyReply) {
  const { ispb, name, code, fullName } = req.body as {
    ispb: string;
    name: string;
    code: string;
    fullName: string;
  };

  const repo = new PrismaBankRepository();
  const create = new CreateBankService(repo);

  const result = await create.execute({ ispb, name, code, fullName });

  return res.status(201).send(result);
}
