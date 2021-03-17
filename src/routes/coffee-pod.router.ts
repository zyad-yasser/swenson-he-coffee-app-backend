import { validateQuery } from './../middlewares/validate-rquery.middleware';
import { Router } from 'express';
import { ICoffeePodRouterDependencies } from '../interfaces/coffee-pod-router-dependencies.interface';
import { IController } from '../interfaces/controller.interface';
import { coffeePodsFiltersSchema } from '../validation/coffee-pods-filters.schema';

class CoffeePodRouter {
  public router = Router();
  private coffeePodController: IController;

  constructor({ coffeePodController }: ICoffeePodRouterDependencies) {
    this.coffeePodController = coffeePodController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.coffeePodController.list);
    this.router.get(
      '/filter',
      validateQuery(coffeePodsFiltersSchema),
      this.coffeePodController.listWithFilters
    );
  }
}

export default CoffeePodRouter;
