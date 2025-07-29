import { Transaction } from '../../entities/transaction.js';
import { TransactionRepository } from '../../repositories/transaction-repository.js';

export class GetTransactionByIdService {
  constructor(private readonly repo: TransactionRepository) {}

  async execute(id: string): Promise<Transaction | null> {
    return this.repo.findById(id);
  }
}
