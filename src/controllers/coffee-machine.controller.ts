import { IController } from './../interfaces/controller.interface';
import { IRepository } from './../interfaces/repository.interface';
import { NextFunction, Request, Response } from 'express';
import { ICoffeeMachineControllerDependencies } from '../interfaces/coffee-machine-controller-dependencies.interface';

class CoffeeMachineController implements IController {
  private coffeeMachineRepository: IRepository;

  constructor({ coffeeMachineRepository }: ICoffeeMachineControllerDependencies) {
    this.coffeeMachineRepository = coffeeMachineRepository;
  }

  public list = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const coffeeMachinesList = await this.coffeeMachineRepository.find();

      res
        .status(200)
        .json(coffeeMachinesList);

    } catch (error) {
      next(error);
    }
  };

  public listWithFilters = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;

      const coffeeMachinesList = await this.coffeeMachineRepository.findWithFilters(params);

      res
        .status(200)
        .json(coffeeMachinesList);

    } catch (error) {
      next(error);
    }
  };

  public listFilters = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const coffeeMachinesFiltersList = await this.coffeeMachineRepository.filters();

      res
        .status(200)
        .json(coffeeMachinesFiltersList);

    } catch (error) {
      next(error);
    }
  };
}

export default CoffeeMachineController;
