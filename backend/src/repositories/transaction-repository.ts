export interface Transaction {
  id: string;
  title: string;
  amount: number;
  categoryId: string;
  bankId: string;
}

export interface TransactionRepository {
  create(transaction: Transaction): Promise<void>;
  findAll(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction | null>;
  delete(id: string): Promise<void>;
}
