import { FastifyInstance } from 'fastify';

interface Bank {
  id: number;
  name: string;
}

const banks: Bank[] = [];
let idCounter = 1;

export default async function banksRoutes(server: FastifyInstance) {
  server.get('/', async () => {
    return banks;
  });

  server.post('/', async (request, reply) => {
    const { name } = request.body as Omit<Bank, 'id'>;
    const bank = { id: idCounter++, name };
    banks.push(bank);
    return bank;
  });

  server.patch('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const { name } = request.body as Omit<Bank, 'id'>;
    const bank = banks.find(b => b.id === Number(id));
    if (!bank) return reply.status(404).send({ message: 'Not found' });
    if (name) bank.name = name;
    return bank;
  });

  server.delete('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const index = banks.findIndex(b => b.id === Number(id));
    if (index === -1) return reply.status(404).send({ message: 'Not found' });
    banks.splice(index, 1);
    return { message: 'Deleted' };
  });
}
