import { coffeeMachinesFiltersSchema } from './../validation/coffee-machines-filters.schema';
import { Router } from 'express';
import { ICoffeeMachineRouterDependencies } from '../interfaces/coffee-machine-router-dependencies.interface';
import { IController } from '../interfaces/controller.interface';
import { IRouter } from '../interfaces/router.interface';
import { validateQuery } from '../middlewares/validate-rquery.middleware';

class CoffeeMachineRouter implements IRouter {
  public router = Router();
  private coffeeMachineController: IController;

  constructor({ coffeeMachineController }: ICoffeeMachineRouterDependencies) {
    this.coffeeMachineController = coffeeMachineController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.coffeeMachineController.list);
    this.router.get('/filter', validateQuery(coffeeMachinesFiltersSchema), this.coffeeMachineController.listWithFilters);
  }
}

export default CoffeeMachineRouter;
