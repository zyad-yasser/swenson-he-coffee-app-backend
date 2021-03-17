import { Router } from 'express';
import { ICoffeePodRouterDependencies } from '../interfaces/coffee-pod-router-dependencies.interface';
import { IController } from '../interfaces/controller.interface';

class CoffeePodRouter {
  public router = Router();
  private coffeePodController: IController;

  constructor({ coffeePodController }: ICoffeePodRouterDependencies) {
    this.coffeePodController = coffeePodController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.coffeePodController.list);
    this.router.get('/filter', this.coffeePodController.listWithFilters);
  }
}

export default CoffeePodRouter;
