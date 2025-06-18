import { FastifyInstance } from 'fastify';

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [];
let idCounter = 1;

export default async function categoriesRoutes(server: FastifyInstance) {
  server.get('/', async () => {
    return categories;
  });

  server.post('/', async (request, reply) => {
    const { name } = request.body as Omit<Category, 'id'>;
    const category = { id: idCounter++, name };
    categories.push(category);
    return category;
  });

  server.patch('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const { name } = request.body as Omit<Category, 'id'>;
    const category = categories.find(c => c.id === Number(id));
    if (!category) return reply.status(404).send({ message: 'Not found' });
    if (name) category.name = name;
    return category;
  });

  server.delete('/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const index = categories.findIndex(c => c.id === Number(id));
    if (index === -1) return reply.status(404).send({ message: 'Not found' });
    categories.splice(index, 1);
    return { message: 'Deleted' };
  });
}
