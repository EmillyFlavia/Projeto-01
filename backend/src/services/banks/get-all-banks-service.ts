import { Bank } from '../../entities/bank.js';
import { BankRepository } from '../../repositories/bank-repository.js';

export class GetAllBanksService {
  constructor(private readonly bankRepo: BankRepository) {}

  async execute(): Promise<Bank[]> {
    return this.bankRepo.findAll();
  }
}
