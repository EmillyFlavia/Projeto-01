import { Transaction, TransactionKind } from '../../entities/transaction.js';
import { Bank } from '../../entities/bank.js';
import { Category } from '../../entities/category.js';
import { TransactionRepository } from '../../repositories/transaction-repository.js';

type CreateTransactionInput = {
  description: string;
  type: TransactionKind;
  amount: number;
  bank: Bank;
  category: Category;
};

export class CreateTransactionService {
  constructor(private readonly repo: TransactionRepository) {}

  async execute(input: CreateTransactionInput): Promise<Transaction> {

    console.log(input)
    const transaction = new Transaction(
      input.description,
      input.type,
      input.amount,
      input.bank,
      input.category,
    );

    return this.repo.create(transaction);
  }
}
