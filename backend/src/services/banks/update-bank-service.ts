import { Bank } from '../../entities/bank.js';
import { BankRepository } from '../../repositories/bank-repository.js';

type UpdateBankInput = {
  id: string;
  data: Partial<Omit<Bank, 'id' | 'createdAt'>>;
};

export class UpdateBankService {
  constructor(private readonly repo: BankRepository) {}

  async execute({ id, data }: UpdateBankInput): Promise<Bank | null> {
    return this.repo.update(id, data);
  }
}
