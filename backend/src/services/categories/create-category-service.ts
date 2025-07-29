import { Category } from '../../entities/category.js';
import { CategoryRepository } from '../../repositories/category-repository.js';

type Input = {
  name: string;
  icon?: string | null;
};

export class CreateCategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async execute({ name, icon }: Input): Promise<Category> {
    const category = new Category(name, icon);
    return this.categoryRepo.create(category);
  }
}
