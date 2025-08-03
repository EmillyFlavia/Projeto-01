import { TransactionRepository } from '../transaction-repository.js';
import { Transaction } from '../../entities/transaction.js';
import { Bank } from '../../entities/bank.js';
import { Category } from '../../entities/category.js';
import { prisma } from '../../database/prisma.js';

export class PrismaTransactionRepository implements TransactionRepository {
  async create(transaction: Transaction): Promise<Transaction> {
    console.log(transaction)
    const record = await prisma.transaction.create({
      data: {
        id: transaction.id,
        description: transaction.description,
        type: transaction.type,
        amount: transaction.amount,
        bankId: transaction.bank.id,
        categoryId: transaction.category.id
      },
      include: {
        bank: true,
        category: true
      }
    });

    return this.mapToEntity(record);
  }

  async findAll(): Promise<Transaction[]> {
    const all = await prisma.transaction.findMany({
      include: {
        bank: true,
        category: true
      }
    });

    return all.map(this.mapToEntity);
  }

  async findById(id: string): Promise<Transaction | null> {
    const found = await prisma.transaction.findUnique({
      where: { id },
      include: {
        bank: true,
        category: true
      }
    });

    return found ? this.mapToEntity(found) : null;
  }

  async update(id: string, data: Partial<Transaction>): Promise<Transaction | null> {
    const updated = await prisma.transaction.update({
      where: { id },
      data: {
        description: data.description,
        type: data.type,
        amount: data.amount,
        bankId: data.bank?.id,
        categoryId: data.category?.id,
        updatedAt: new Date()
      },
      include: {
        bank: true,
        category: true
      }
    });

    return this.mapToEntity(updated);
  }

  async delete(id: string): Promise<void> {
    await prisma.transaction.delete({ where: { id } });
  }

  private mapToEntity(data: any): Transaction {
    const bank = new Bank(
      data.bank.ispb,
      data.bank.name,
      data.bank.code,
      data.bank.fullName,
      data.bank.id,
      data.bank.createdAt,
      data.bank.updatedAt
    );

    const category = new Category(
      data.category.name,
      data.category.icon,
      data.category.id,
      data.category.createdAt,
      data.category.updatedAt
    );

    return new Transaction(
      data.description,
      data.type,
      data.amount,
      bank,
      category,
      data.id,
      data.createdAt,
      data.updatedAt
    );
  }
}
