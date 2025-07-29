import { Bank } from '../../entities/bank.js';
import { BankRepository } from '../../repositories/bank-repository.js';

type CreateBankInput = {
  ispb: string;
  name: string;
  code: string;
  fullName: string;
};

export class CreateBankService {
  constructor(private readonly bankRepo: BankRepository) {}

  async execute(input: CreateBankInput): Promise<Bank> {
    const bank = new Bank(
      input.ispb,
      input.name,
      input.code,
      input.fullName
    );

    return this.bankRepo.create(bank);
  }
}
