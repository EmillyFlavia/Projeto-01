export interface Bank {
  id: string;
  name: string;
}

export interface BankRepository {
  create(bank: Bank): Promise<void>;
  findAll(): Promise<Bank[]>;
  findById(id: string): Promise<Bank | null>;
  delete(id: string): Promise<void>;
}
