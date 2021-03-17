import { coffeeMachinesFiltersSchema } from './../validation/coffee-machines-filters.schema';
import { Router } from 'express';
import { ICoffeeMachineRouterDependencies } from '../interfaces/coffee-machine-router-dependencies.interface';
import { IRouter } from '../interfaces/router.interface';
import { validateQuery } from '../middlewares/validate-rquery.middleware';

class CoffeeMachineRouter implements IRouter {
  public router = Router();

  constructor({ coffeeMachineController }: ICoffeeMachineRouterDependencies) {
    this.initializeRoutes({ coffeeMachineController });
  }

  private initializeRoutes({ coffeeMachineController }: ICoffeeMachineRouterDependencies) {
    this.router.get('/', coffeeMachineController.list);

    this.router.get(
      '/filter',
      validateQuery(coffeeMachinesFiltersSchema),
      coffeeMachineController.listWithFilters
    );

    this.router.get('/filters', coffeeMachineController.listFilters);
  }
}

export default CoffeeMachineRouter;
