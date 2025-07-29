import { EntityBase } from './entity.js';

export class Category extends EntityBase {
  public name: string;
  public icon?: string | null;

  constructor(
    name: string,
    icon?: string | null,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date | null
  ) {
    super(id, createdAt, updatedAt);
    this.name = name;
    this.icon = icon ?? null;
  }
}
