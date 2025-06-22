import { TransactionRepository } from '../transaction-repository.ts';
import { Transaction } from '../../models/transaction.ts';

export class InMemoryTransactionRepository implements TransactionRepository {
  private transactions: Transaction[] = [];

  async create(transaction: Transaction): Promise<void> {
    this.transactions.push(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactions;
  }

  async findById(id: string): Promise<Transaction | null> {
    return this.transactions.find(transaction => transaction.id === id) || null;
  }

  async delete(id: string): Promise<void> {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
  }
}
