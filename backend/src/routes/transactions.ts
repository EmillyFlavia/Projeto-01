import { FastifyInstance } from 'fastify';

interface Transaction {
  id: number;
  description: string;
  amount: number;
}

const transactions: Transaction[] = [];
let idCounter = 1;

export default async function transactionsRoutes(server: FastifyInstance) {
  server.get('/', async () => {
    return transactions;
  });

  server.post('/', async (request, reply) => {
    const { description, amount } = request.body as Omit<Transaction, 'id'>;
    const transaction = { id: idCounter++, description, amount };
    transactions.push(transaction);
    return transaction;
  });

  server.patch('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const { description, amount } = request.body as Omit<Transaction, 'id'>;
    const transaction = transactions.find(t => t.id === Number(id));
    if (!transaction) return reply.status(404).send({ message: 'Not found' });
    if (description) transaction.description = description;
    if (amount) transaction.amount = amount;
    return transaction;
  });

  server.delete('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const index = transactions.findIndex(t => t.id === Number(id));
    if (index === -1) return reply.status(404).send({ message: 'Not found' });
    transactions.splice(index, 1);
    return { message: 'Deleted' };
  });
}
