import { Bank } from '../entities/bank.js';

export interface BankRepository {
  create(bank: Bank): Promise<Bank>;
  findAll(): Promise<Bank[]>;
  findById(id: string): Promise<Bank | null>;
  update(id: string, data: Partial<Omit<Bank, 'id' | 'createdAt'>>): Promise<Bank | null>;
  delete(id: string): Promise<void>;
}
