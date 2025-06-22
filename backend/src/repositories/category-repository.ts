export interface Category {
  id: string;
  name: string;
}

export interface CategoryRepository {
  create(category: Category): Promise<void>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  delete(id: string): Promise<void>;
}
