import { validateQuery } from './../middlewares/validate-rquery.middleware';
import { Router } from 'express';
import { ICoffeePodRouterDependencies } from '../interfaces/coffee-pod-router-dependencies.interface';
import { coffeePodsFiltersSchema } from '../validation/coffee-pods-filters.schema';

class CoffeePodRouter {
  public router = Router();

  constructor({ coffeePodController }: ICoffeePodRouterDependencies) {
    this.initializeRoutes({ coffeePodController });
  }

  private initializeRoutes({ coffeePodController }: ICoffeePodRouterDependencies) {
    this.router.get('/', coffeePodController.list);

    this.router.get(
      '/filter',
      validateQuery(coffeePodsFiltersSchema),
      coffeePodController.listWithFilters
    );

    this.router.get('/filters', coffeePodController.listFilters);
  }
}

export default CoffeePodRouter;
