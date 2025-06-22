import { BankRepository } from '../bank-repository.ts';
import { Bank } from '../../models/bank.ts';

export class InMemoryBankRepository implements BankRepository {
  private banks: Bank[] = [];

  async create(bank: Bank): Promise<void> {
    this.banks.push(bank);
  }

  async findAll(): Promise<Bank[]> {
    return this.banks;
  }

  async findById(id: string): Promise<Bank | null> {
    return this.banks.find(b => b.id === id) || null;
  }

  async delete(id: string): Promise<void> {
    this.banks = this.banks.filter(b => b.id !== id);
  }
}
