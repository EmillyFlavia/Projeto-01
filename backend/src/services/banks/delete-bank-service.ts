import { BankRepository } from '../../repositories/bank-repository.js';

export class DeleteBankService {
  constructor(private readonly repo: BankRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
