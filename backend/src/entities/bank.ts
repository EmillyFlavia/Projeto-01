import { EntityBase } from './entity.js';

export class Bank extends EntityBase {
  public ispb: string;
  public name: string;
  public code: string;
  public fullName: string;

  constructor(
    ispb: string,
    name: string,
    code: string,
    fullName: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date | null
  ) {
    super(id, createdAt, updatedAt);
    this.ispb = ispb;
    this.name = name;
    this.code = code;
    this.fullName = fullName;
  }
}
