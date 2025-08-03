import { CategoryRepository } from '../category-repository.js';
import { Category } from '../../entities/category.js';
import { prisma } from '../../database/prisma.js';

export class PrismaCategoryRepository implements CategoryRepository {
  async create(category: Category): Promise<Category> {
    const record = await prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
        icon: category.icon,
        createdAt: category.createdAt,
        updatedAt: category.updatedAt
      }
    });

    return new Category(
      record.name,
      record.icon,
      record.id,
      record.createdAt,
      record.updatedAt
    );
  }

  async findAll(): Promise<Category[]> {
    const all = await prisma.category.findMany();

    return all.map((item: Category) =>
      new Category(
        item.name,
        item.icon,
        item.id,
        item.createdAt,
        item.updatedAt
      )
    );
  }

  async findById(id: string): Promise<Category | null> {
    const found = await prisma.category.findUnique({ where: { id } });

    return found
      ? new Category(
          found.name,
          found.icon,
          found.id,
          found.createdAt,
          found.updatedAt
        )
      : null;
  }

  async update(id: string, data: Partial<Category>): Promise<Category | null> {
    const updated = await prisma.category.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });

    return new Category(
      updated.name,
      updated.icon,
      updated.id,
      updated.createdAt,
      updated.updatedAt
    );
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({ where: { id } });
  }
}
