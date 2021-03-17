import { Router } from 'express';
import { ICoffeeMachineRouterDependencies } from '../interfaces/coffee-machine-router-dependencies.interface';
import { IController } from '../interfaces/controller.interface';
import { IRouter } from '../interfaces/router.interface';

class CoffeeMachineRouter implements IRouter {
  public router = Router();
  private coffeeMachineController: IController;

  constructor({ coffeeMachineController }: ICoffeeMachineRouterDependencies) {
    this.coffeeMachineController = coffeeMachineController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.coffeeMachineController.list);
    this.router.get('/filter', this.coffeeMachineController.listWithFilters);
  }
}

export default CoffeeMachineRouter;
