import { FastifyInstance } from 'fastify';

import { createCategoryController } from '../controllers/category/create-category-controller.js';
import { getAllCategoriesController } from '../controllers/category/get-all-categories-controller.js';
import { getCategoryByIdController } from '../controllers/category/get-category-by-id-controller.js';
import { updateCategoryController } from '../controllers/category/update-category-controller.js';
import { deleteCategoryController } from '../controllers/category/delete-category-controller.js';

export async function categoryRoutes(app: FastifyInstance) {
  app.post('/categories', createCategoryController);
  app.get('/categories', getAllCategoriesController);
  app.get('/categories/:id', getCategoryByIdController);
  app.put('/categories/:id', updateCategoryController);
  app.delete('/categories/:id', deleteCategoryController);
}
