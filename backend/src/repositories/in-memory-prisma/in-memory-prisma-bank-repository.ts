import { BankRepository } from '../bank-repository.js';
import { Bank } from '../../entities/bank.js';
import { prisma } from '../../database/prisma.js';

export class PrismaBankRepository implements BankRepository {
  async create(bank: Bank): Promise<Bank> {
    const created = await prisma.bank.create({
      data: {
        id: bank.id,
        ispb: bank.ispb,
        name: bank.name,
        code: bank.code,
        fullName: bank.fullName,
        createdAt: bank.createdAt,
        updatedAt: bank.updatedAt
      }
    });

    return new Bank(
      created.ispb,
      created.name,
      created.code,
      created.fullName,
      created.id,
      created.createdAt,
      created.updatedAt
    );
  }

  async findById(id: string): Promise<Bank | null> {
    const result = await prisma.bank.findUnique({ where: { id } });
    if (!result) return null;

    return new Bank(
      result.ispb,
      result.name,
      result.code,
      result.fullName,
      result.id,
      result.createdAt,
      result.updatedAt
    );
  }

  async findAll(): Promise<Bank[]> {
    const items = await prisma.bank.findMany();

    return items.map((entry: Bank) =>
      new Bank(
        entry.ispb,
        entry.name,
        entry.code,
        entry.fullName,
        entry.id,
        entry.createdAt,
        entry.updatedAt
      )
    );
  }

  async update(id: string, data: Partial<Bank>): Promise<Bank | null> {
    const updated = await prisma.bank.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });

    return new Bank(
      updated.ispb,
      updated.name,
      updated.code,
      updated.fullName,
      updated.id,
      updated.createdAt,
      updated.updatedAt
    );
  }

  async delete(id: string): Promise<void> {
    await prisma.bank.delete({ where: { id } });
  }
}
