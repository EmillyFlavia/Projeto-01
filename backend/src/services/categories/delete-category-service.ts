import { CategoryRepository } from '../../repositories/category-repository.js';

export class DeleteCategoryService {
  constructor(private readonly repo: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
