import { Category } from '../entities/category.js';

export interface CategoryRepository {
  create(category: Category): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  update(id: string, data: Partial<Omit<Category, 'id' | 'createdAt'>>): Promise<Category | null>;
  delete(id: string): Promise<void>;
}
