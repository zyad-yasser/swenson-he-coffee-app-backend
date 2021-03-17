import { Router } from 'express';
import IndexController from '../controllers/index.controller';
import { IRouterDependencies } from '../interfaces/router-dependencies.interface';
import { IRouter } from '../interfaces/router.interface';

class IndexRouter implements IRouter {
  public router = Router();
  private indexController = new IndexController();

  constructor({ coffeeMachineRouter, coffeePodRouter }: IRouterDependencies) {
    this.initializeRoutes();
    this.initializeSubRoutes({ coffeeMachineRouter, coffeePodRouter });
  }

  private initializeSubRoutes({ coffeeMachineRouter, coffeePodRouter }: IRouterDependencies) {
    this.router.use('/coffee-machine', coffeeMachineRouter.router);
    this.router.use('/coffee-pod', coffeePodRouter.router);
  }

  private initializeRoutes() {
    this.router.get('/', this.indexController.index);
  }
}

export default IndexRouter;
