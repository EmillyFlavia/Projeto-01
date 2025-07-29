import { Bank } from '../../entities/bank.js';
import { BankRepository } from '../../repositories/bank-repository.js';

export class GetBankByIdService {
  constructor(private readonly repo: BankRepository) {}

  async execute(bankId: string): Promise<Bank | null> {
    return this.repo.findById(bankId);
  }
}
