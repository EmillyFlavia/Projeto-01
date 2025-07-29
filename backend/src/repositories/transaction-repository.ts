import { Transaction } from '../entities/transaction.js';

export interface TransactionRepository {
  create(transaction: Transaction): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction | null>;
  update(id: string, data: Partial<Omit<Transaction, 'id' | 'createdAt'>>): Promise<Transaction | null>;
  delete(id: string): Promise<void>;
}
