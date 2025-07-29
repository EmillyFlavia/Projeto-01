import { TransactionRepository } from '../../repositories/transaction-repository.js';

export class DeleteTransactionService {
  constructor(private readonly repo: TransactionRepository) {}

  async execute(transactionId: string): Promise<void> {
    await this.repo.delete(transactionId);
  }
}
