import { Transaction } from '../../entities/transaction.js';
import { TransactionRepository } from '../../repositories/transaction-repository.js';

type UpdateTransactionInput = {
  id: string;
  data: Partial<Omit<Transaction, 'id' | 'createdAt'>>;
};

export class UpdateTransactionService {
  constructor(private readonly repo: TransactionRepository) {}

  async execute({ id, data }: UpdateTransactionInput): Promise<Transaction | null> {
    return this.repo.update(id, data);
  }
}
