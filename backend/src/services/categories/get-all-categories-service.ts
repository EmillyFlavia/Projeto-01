import { Category } from '../../entities/category.js';
import { CategoryRepository } from '../../repositories/category-repository.js';

export class GetAllCategoriesService {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(): Promise<Category[]> {
    return this.repository.findAll();
  }
}
