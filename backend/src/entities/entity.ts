import { randomUUID } from 'node:crypto';

/**
 * Classe base para representar entidades do domínio.
 */
export abstract class EntityBase {
  public readonly id: string;
  public readonly createdAt: Date;
  public updatedAt: Date | null;

  protected constructor(
    id?: string,
    createdAt?: Date,
    updatedAt?: Date | null
  ) {
    this.id = id ?? randomUUID();
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? null;
  }
}
