import { Category } from '../../entities/category.js';
import { CategoryRepository } from '../../repositories/category-repository.js';

export class GetCategoryByIdService {
  constructor(private readonly repo: CategoryRepository) {}

  async execute(categoryId: string): Promise<Category | null> {
    return this.repo.findById(categoryId);
  }
}
