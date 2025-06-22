import { CategoryRepository } from '../category-repository.ts';
import { Category } from '../../models/category.ts';

export class InMemoryCategoryRepository implements CategoryRepository {
  private categories: Category[] = [];

  async create(category: Category): Promise<void> {
    this.categories.push(category);
  }

  async findAll(): Promise<Category[]> {
    return this.categories;
  }

  async findById(id: string): Promise<Category | null> {
    return this.categories.find(category => category.id === id) || null;
  }

  async delete(id: string): Promise<void> {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}
