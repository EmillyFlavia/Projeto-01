import { EntityBase } from './entity.js';
import { Bank } from './bank.js';
import { Category } from './category.js';

export type TransactionKind = 'income' | 'expense';

export class Transaction extends EntityBase {
  public description: string;
  public type: TransactionKind;
  public amount: number;
  public bank: Bank;
  public category: Category;

  constructor(
    description: string,
    type: TransactionKind,
    amount: number,
    bank: Bank,
    category: Category,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date | null
  ) {
    super(id, createdAt, updatedAt);
    this.description = description;
    this.type = type;
    this.amount = amount;
    this.bank = bank;
    this.category = category;
  }
}
