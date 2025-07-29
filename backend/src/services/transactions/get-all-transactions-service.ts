import { Transaction } from '../../entities/transaction.js';
import { TransactionRepository } from '../../repositories/transaction-repository.js';

export class GetAllTransactionsService {
  constructor(private readonly repository: TransactionRepository) {}

  async execute(): Promise<Transaction[]> {
    return this.repository.findAll();
  }
}
