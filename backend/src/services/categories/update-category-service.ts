import { Category } from '../../entities/category.js';
import { CategoryRepository } from '../../repositories/category-repository.js';

type UpdateCategoryInput = {
  id: string;
  data: Partial<Omit<Category, 'id' | 'createdAt'>>;
};

export class UpdateCategoryService {
  constructor(private readonly repo: CategoryRepository) {}

  async execute({ id, data }: UpdateCategoryInput): Promise<Category | null> {
    return this.repo.update(id, data);
  }
}
