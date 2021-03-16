import { Router } from 'express';
import IndexController from '../controllers/index.controller';
import Route from '../interfaces/routes.interface';

class IndexRouter implements Route {
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
    this.initializeSubRoutes();
  }

  private initializeSubRoutes() {
    /** */
  }

  private initializeRoutes() {
    this.router.get('/', this.indexController.index);
  }
}

export default IndexRouter;
